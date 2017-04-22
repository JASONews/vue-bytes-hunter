<template>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <router-link tag="a" to="/" class="navbar-brand">Bytes Hunter</router-link>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-left">
                <router-link v-if="online" tag="li" to="/game-list/*"><a>GAMES</a></router-link>
                <router-link v-if="online" tag="li" to="/ranking"><a>RANKING</a></router-link>
            </ul>
            <form v-if="online" class="navbar-form navbar-left">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search" v-model="searchInput"/>
                </div>
                <button @click.prevent="submitSearch" class="btn btn-default">Search</button>
            </form>
            <ul class="nav navbar-nav navbar-right">

                <li>
                  <template v-if="online">
                  <a href="#" @click="signOut"><i class="fa fa-google-plus-square icon" aria-hidden="true"></i>Google logout</a>
                </template>
                <template v-else>
                <a href="#" @click="login">
                  <i class="fa fa-google-plus-square icon" aria-hidden="true"></i>Google login</a>
                </template>
                </li>
                <router-link v-if="online" tag="li" to="/user-profile"><a>{{user.givenName}} <span class="glyphicon glyphicon-user"></span></a></router-link>
            </ul>
        </div>
      </div>
      <div id="loginBtn" class="g-signin2 googlelogin" data-onsuccess="onSignIn" hidden="true"></div>
      <div id="toogleBtn" @click='signIn' hidden="true"></div>
    </nav>

</template>

<script type="text/javascript">

module.exports = {
  data: function () {
    return {
      online: false,
      user: {},
      searchInput: ""
    };
  },

  methods: {

    submitSearch: function () {
      console.log(this.searchInput);
      this.$router.push("/game-list/"+this.searchInput);

    },

    signIn: function() {
      var googleUser = window.googleUser;
      var profile = googleUser.getBasicProfile();
      console.log(profile);
      console.log("ID: " + profile.getId()); // Don't send this directly to your server!
      console.log('Full Name: ' + profile.getName());
      console.log('Given Name: ' + profile.getGivenName());
      console.log('Family Name: ' + profile.getFamilyName());
      console.log("Image URL: " + profile.getImageUrl());
      console.log("Email: " + profile.getEmail());
      userid = profile.getId()
      // The ID token you need to pass to your backend:
      var id_token = googleUser.getAuthResponse().id_token;
      userid = profile.getId();
      Cookies.remove("userid");
      Cookies.set("userid", userid);
      console.log("ID Token: " + id_token);
      this.online = true;
      this.user = {
        id_token: id_token,
        userid: userid,
        givenName : profile.getGivenName(),
        thumbnail : "https://storage.googleapis.com/bytehunter_images/hongyang.png"
      };
      this.$root.user = this.user;
    },
    signOut: function() {
      console.log("processing log out");
      var auth2 = gapi.auth2.getAuthInstance();
      var that = this;
      auth2.signOut().then(function () {
          console.log('User signed out.');
          that.online = false;
          that.$root.user = null;
          that.$router.push("/");
      });
    },
    login: function () {
      console.log("clicked");
      $(".abcRioButton")[0].click();
    }
  }
};
</script>
