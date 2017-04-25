<template>
  <div class="container">
      <div class="row">
          <div class="col-sm-2">
              <!-- lists -->
              <br>
              <br>
              <div class="row">
                  <!-- Level of difficulty-->
                  <div id="app-user-info">
                      <img :src="avatar" alt="..." class="rounded img-thumbnail">
                  </div>
                  <button data-toggle="modal" data-target="#avatarModal" class="btn btn-default">Change</button>

                  <div id="avatarModal" class="modal fade" role="dialog">
                    <div class="modal-dialog">
                      <!-- Modal content-->
                      <div class="modal-content">
                        <!-- <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                          <h4 class="modal-title">Login</h4>
                        </div> -->
                        <div class="modal-body">
                          <div class="form-group">
                            <label for="avatarurl" class="control-label">Avatar Url</label>
                            <input type="text" class="form-control" id="avatarurl" v-model="avatar1">
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" @click="updateAvatar" data-dissmiss="modal" class="btn btn-default">OK</button>
                          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

              <div class="row">
                  <!-- Category -->
                  <h3>My Ranks</h3>
                  <div class="list-group">
                      <a href="#" class="list-group-item">Normal<span class="badge">1</span></a>
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

                <game-card v-for="game in games" thumbnail-src="/static/logo.png" :game-src="'/game/'+game" :game-title="'test ' + game" last-update="1 mins ago"></game-card>

                <!-- <div class="card mb-3">
                  <img class="card-img-top" src="../assets/static/logo.png" alt="Card image cap">
                  <div class="card-block">
                    <h4 class="card-title">DragonByte</h4>
                    <p>You've successfully completed <i><strong>Challenge: DragonByte</strong></i></p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div> -->

              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script type="text/javascript">

import gameCard from "./gameCard"

export default {
  components: {
    gameCard
  },

  data () {
    return {
      games: [],
      avatar: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15b9959093e%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15b9959093e%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.4296875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      avatar1: ""

    }
  },
  mounted: function() {
      // this.$http.get('https://storage.googleapis.com/bytehunter_images/userinfo.json').then(response => {
      //   return response.json();
      // }).then(json => {
      //   this.googleid = json.googleid;
      //   this.email = json.email;
      //   this.preferredName = json.preferredName;
      //   this.lastTimeLogin = json.lastTimeLogin;
      //   this.score = json.score;
      // })
      this.games.push(1,2,3,4,5);
      this.avatar = this.$root.user.thumbnail;
      this.avatar1 = this.avatar;
  },

  methods: {
    updateAvatar: function () {
      this.avatar = this.avatar1;
      this.$root.user.thumbnail = this.avatar;
      // document.getElementById("avatarModal").modal("hide");
    }
  }
}
</script>
