<template>
  <div id="wrapper">
    <bh-nav id="navHeader"></bh-nav>
      <div class="h-100">
        <router-view></router-view>
      </div>
    <!-- Modal -->
    <!-- <div id="loginModal" class="modal fade" role="dialog">
      <div class="modal-dialog"> -->

        <!-- Modal content-->
        <!-- <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Login</h4>
          </div>
          <div class="modal-body">
            <div class="g-signin2 googlelogin" data-onsuccess="onSignIn" hidden="true"></div>
          </div>
          <div class="modal-footer">
            <button type="button" onclick="login()" class="btn btn-default">Login</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div> -->
  </div>

</template>

<script>


import bhNav from './components/bhNav'

module.exports = {
  data: function () {
    return {
    }

  },

  components: {
    bhNav
  },
  methods: {

  }
};



</script>

<style lang="css">
  #wrapper {
    height: 95%;
  }
  html body {
  }

  #navHeader {
    z-index: 150;
    box-shadow: 0px 2px 10px rgba(0,0,0,.2);
  }
</style>
