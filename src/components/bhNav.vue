<template lang="html">
    <nav id="globalNavbar" :class="['navbar navbar-toggleable-md bg-faded', lightScheme ? 'navbar-light' : ' navbar-inverse bg-inverse']">
      <div class="container w-100">
        <button type="button" class="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#myNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <router-link tag="a" to="/" class="navbar-brand">Bytes Hunter</router-link>
        <div class="collapse navbar-collapse" id="myNavbar">
            <ul v-if="online" class="navbar-nav">
              <li class="nav-item">
                <router-link tag="a" class="nav-link" to="/game-list">GAMES</router-link>
              </li>
              <li class="nav-item">
                <router-link tag="a" class="nav-link" to="/ranking">RANKING</router-link>
              </li>
            </ul>
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <template v-if="online">
                    <a href="#"  class="nav-link" @click="signOut"><i class="fa fa-google-plus-square icon" aria-hidden="true"></i> Google logout</a>
                  </template>
                  <template v-else>
                  <a href="#" class="nav-link" @click="login">
                    <i class="fa fa-google-plus-square icon" aria-hidden="true"></i>Google login</a>
                  </template>
                  </li>
                  <li class="nav-item">
                    <router-link v-if="online" tag="a" class="nav-link" to="/user-profile"><a>{{this.$root.user.preferredName}} <i class="fa fa-user-circle" aria-hidden="true"></i></a></router-link>
                  </li>
              </ul>
        </div>
      </div>
      <div id="loginBtn" class="g-signin2 googlelogin" data-onsuccess="onSignIn" hidden="true"></div>
      <div id="toogleBtn" @click='signIn' hidden="true"></div>
    </nav>
</template>

<script type="text/javascript">

const axios = require('axios');

module.exports = {
  data: function () {
    return {
      searchInput: "",
      lightScheme: true
    };
  },

  computed: {
    online: function() {
      return this.$root.online;
    }
  },

  watch: {
    '$route' (to, from) {
      if(to.fullPath != "/" && this.$root.online == false) {
        this.$router.push("/");
      }
      if (to.fullPath.split("/")[1] == "game" || to.fullPath.split("/")[1] == "" ) {
        this.lightScheme = false;
      } else {
        this.lightScheme = true;
      }
    }
  },

  mounted: function () {
    this.$root.bus.$on("signin", this.signIn);
    const path = this.$router.history.current.fullPath.split("/")[1];
    console.log(path);
    if (path == "game" || path == "") {
      this.lightScheme = false;
    } else {
      this.lightScheme = true;
    }
  },

  methods: {

    signIn: function(gu) {
      var googleUser = gu;
      var profile = googleUser.getBasicProfile();
      console.log(profile);
      console.log("ID: " + profile.getId()); // Don't send this directly to your server!
      console.log('Full Name: ' + profile.getName());
      console.log('Given Name: ' + profile.getGivenName());
      console.log('Family Name: ' + profile.getFamilyName());
      console.log("Image URL: " + profile.getImageUrl());
      console.log("Email: " + profile.getEmail());
      // The ID token you need to pass to your backend:
      var id_token = googleUser.getAuthResponse().id_token;
      var userid = profile.getId();
      Cookies.remove("userid");
      Cookies.set("userid", userid);
      console.log("ID Token: " + id_token);
      var that = this;

      if (DEV) {

        that.$root.user = {
          preferredName: profile.getName(),
          id: userid,
          id_token: id_token,
          thumbnail: profile.getImageUrl(),
          email: profile.getEmail(),
          lastTimeLogin: Date.now(),
          activities: [],
          awards: [],
          normalScore: 100,
          hardScore: 50,
          insaneScore: 1000,
          likedGames: []
        };
        that.$root.online = true;
        this.afterSignIn();
      } else {

        axios.post("/account/auth", id_token)
          .then(function (res) {
            if (res.status < 300 ) {
              var u = res.data;
              that.$root.user = u;
              that.$root.online = true;
              that.afterSignIn();
            }
          })
          .catch(function (err) {
            console.log(err);
          });
      }
    },
    signOut: function() {
      console.log("processing log out");
      var auth2 = gapi.auth2.getAuthInstance();
      var that = this;
      auth2.signOut().then(function () {
          console.log('User signed out.');
          that.$root.online = false;
          that.$root.user = null;
          that.$router.push("/");
          if (!DEV) {
            axios.get("/account/signout");
          }
      });
    },
    login: function () {
      console.log("clicked");
      $(".abcRioButton")[0].click();
    },

    afterSignIn: function () {
      if (this.$router.currentRoute.fullPath.split("/")[1] == "") {
        alert("Welcome to the ByteHunter " + this.$root.user.preferredName);
      }
    }
  }
};
</script>
