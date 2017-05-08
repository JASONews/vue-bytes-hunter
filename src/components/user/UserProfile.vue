<template>
  <div class="container-fluid h-100 p-0">
    <div id="bg-cover" class="h-100 w-100">
    </div>
    <div class="row h-100 w-100">
      <div class="col-3 h-100 profileLeft">
        <profile-left></profile-left>
      </div>
      <div class="col-4 p-0">
      </div>
      <div class="col-7 p-0">
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
    background: linear-gradient(to bottom left, rgba(144,238,144, .5), rgba(255,255,0,.3)) white;
    box-shadow: 5px 0 10px -1px rgba(0,0,0,0.2);
    position: fixed;
    z-index: 100;
    top: 0px;
  }

  #bg-cover {
    position: fixed;
    top: 0px;
    background: linear-gradient(to bottom right, rgba(211,211,211,.3), rgba(100, 100, 100, .3)), url("/static/img/pw_pattern.png") repeat;
    z-index: -100;
  }
</style>
