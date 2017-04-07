<template>
  <div class="container">
      <div class="row">
          <div class="col-sm-2">
              <!-- lists -->
              <br>
              <br>
              <div class="row">
                  <!-- Level of difficulty-->
                  <div id="app-user-info" class="thumbnail">
                      <img src="https://storage.googleapis.com/bytehunter_images/hongyang.png" alt="hongyang">
                      <p>{{uname}}</p>
                  </div>
              </div>

              <div class="row">
                  <!-- Category -->
                  <h3>My Ranks</h3>
                  <div class="list-group">
                      <a href="#" class="list-group-item">Normal<span class="badge">1</span></a>
                      <a href="#" class="list-group-item">Medium<span class="badge">2</span></a>
                      <a href="#" class="list-group-item">Hard<span class="badge">3</span></a>
                      <a href="#" class="list-group-item">Insame<span class="badge">4</span></a>
                  </div>
              </div>
          </div>

          <div class="col-sm-10">
              <img class="timeline" src="https://storage.googleapis.com/bytehunter_images/timeline.png" alt="timeline">
          </div>
      </div>
  </div>
</template>

<script>
  var host = "localhost:8080"
  var userInfo = new Vue({
    el: '#app-user-info',
    data: {
      info: [
        
      ]
    },
    ready: function() {
      this.$http.get(host+'/user/profile', function(data) {
        this.$set('info', data)
        this.$set('uname', info[preferredName])
      }).error(function(data, status, request) {

      })
    }
  })
</script>

<style>
body { 
  padding-top: 50px; 
}

.timeline {
  padding-left: 80px;
  height: 1000px;
  width: auto;
}
</style>