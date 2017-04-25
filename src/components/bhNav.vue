<template>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <div class="container">
        <button type="button" class="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#myNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <router-link tag="a" to="/" class="navbar-brand">Bytes Hunter</router-link>
        <div class="collapse navbar-collapse" id="myNavbar">
            <ul v-if="online" class="navbar-nav">
              <li class="nav-item">
                <router-link tag="a" class="nav-link" to="/game-list/*">GAMES</router-link>
              </li>
              <li class="nav-item">
                <router-link tag="a" class="nav-link" to="/ranking">RANKING</router-link>
              </li>
              <form v-if="online" class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" v-model="searchInput">
                <button @click.prevent="submitSearch" class="btn btn-outline-success my-2 my-sm-0">Search</button>
              </form>
            </ul>

            <!-- <form v-if="online" class="navbar-form navbar-left">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search" v-model="searchInput"/>
                </div>
                <button @click.prevent="submitSearch" class="btn btn-default">Search</button>
            </form> -->
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
      // online: false,
      // user: {},
      searchInput: ""
    };
  },

  computed: {
    online: function() {
      return this.$root.online;
    }
  },

  mounted: function () {
    this.$root.bus.$on("signin", this.signIn);
  },

  methods: {

    submitSearch: function () {
      console.log(this.searchInput);
      this.$router.push("/game-list/"+this.searchInput);


    },

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

      if (!DEV) {
      axios.post("/account/auth", id_token)
        .then(function (res) {
          if (res.status < 300 ) {
            var u = res.data;
            that.$root.user = u;
            that.$root.online = true;
          }
        })
        .catch(function (err) {
          console.log(err);
        });

      } else {
        that.$root.user = {
          preferredName: profile.getName(),
          userid: userid,
          id_token: id_token,
          thumbnail: profile.getImageUrl(),
          email: profile.getEmail(),
          lastTimeLogin: Date.now()
        };
        that.$root.online = true;
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
    }
  }
};
</script>
