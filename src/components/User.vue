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
                      <p id="displayname">{{preferredName}}</p>
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

<script type="text/javascript">
export default {
  data () {
    return {
      googleid: '',
      email: "",
      preferredName: "",
      lastTimeLogin: "",
      score: 0
    }
  },
  mounted: function() {
      this.$http.get('https://storage.googleapis.com/bytehunter_images/userinfo.json').then(response => {
        return response.json();
      }).then(json => {
        this.googleid = json.googleid;
        this.email = json.email;
        this.preferredName = json.preferredName;
        this.lastTimeLogin = json.lastTimeLogin;
        this.score = json.score;
      })
  }
}
</script>

<style>
body { 
  padding-top: 50px; 
}

#displayname {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

.timeline {
  padding-left: 80px;
  height: 1000px;
  width: auto;
}
</style>