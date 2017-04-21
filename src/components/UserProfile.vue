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
            <div class="container">
              <div class="page-header">
                  <h1 id="timeline-text">Your Journey as A Bytes Hunter</h1>
              </div>
              <div class="cards-container">
                <div class="card mb-3">
                  <img class="card-img-top" src="../assets/logo.png" alt="Card image cap">
                  <div class="card-block">
                    <h4 class="card-title">DragonByte</h4>
                    <p>You've successfully completed <i><strong>Challenge: DragonByte</strong></i></p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>

                <div class="card mb-3">
                  <img class="card-img-top" src="../assets/logo.png" alt="Card image cap">
                  <div class="card-block">
                    <h4 class="card-title">PhoneixByte</h4>
                    <p>You've successfully completed <i><strong>Challenge: PhoneixByte</strong></i></p>
                    <p class="card-text"><small class="text-muted">Last updated 1 hour ago</small></p>
                  </div>
                </div>

                <div class="card mb-3">
                  <img class="card-img-top" src="../assets/logo.png" alt="Card image cap">
                  <div class="card-block">
                    <h4 class="card-title">ElephantByte</h4>
                    <p>You've successfully completed <i><strong>Challenge: ElephantByte</strong></i></p>
                    <p class="card-text"><small class="text-muted">Last updated 2 days ago</small></p>
                  </div>
                </div>

              </div>
            </div>
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
