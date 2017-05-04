<template>
  <div class="container h-100">
    <div class="row h-100">
      <div class="col-3 mr-2 profile-divider h-100 profileLeft">
        <profile-left></profile-left>
      </div>
      <div class="col-8 ml-2">
        <profile-right></profile-right>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

  import profileLeft from "./userProfileLeft"
  import profileRight from "./userProfileRight"

  const axios = require("axios");

  module.exports = {
    components: {
      profileLeft,
      profileRight
    },

    data: function() {
      return {
      }
    },

    mounted: function() {
    }
  }
</script>
<style lang="css">
.profile-divider {
  border-right-width: 0.0em;
  border-right-color: linear-gradient(rgba(144,238,144, .5), rgba(255,255,0,.3));
  border-right-style: solid;
}
  html, body {
    /*background:  linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);*/
  }

  .profileLeft {
    background: linear-gradient(to bottom left, rgba(144,238,144, .5), rgba(255,255,0,.3));
  }

</style>
