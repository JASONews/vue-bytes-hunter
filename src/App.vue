<template>
  <div id="wrapper">
    <bh-nav></bh-nav>
    <div class="container">
      <div>
        <router-view></router-view>
      </div>
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
  components: {
    bhNav
  },
  methods: {

  }
};



</script>
