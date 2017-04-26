<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <!-- lists -->
        <br>
        <br>
        <div class="row m-1">
          <!-- Level of difficulty-->
          <div class="col">
            <div id="app-user-info row">
              <div class="col text-center">
                <img :src="avatar" class="rounded img-thumbnail">
              </div>
            </div>
            <div class="row m-2">
              <div class="col text-center mt-2">
                <button type="button" data-toggle="modal" data-target="#avatarModal" class="btn btn-outline-success">Change Avatar</button>
              </div>
            </div>

          </div>

          <div id="avatarModal" class="modal fade" role="dialog">
            <div class="modal-dialog">
              <!-- Modal content-->
              <div class="modal-content">
                <div class="modal-body">
                  <div class="form-group">
                    <label for="avatarurl" class="control-label">Avatar Url</label>
                    <input type="text" class="form-control" id="avatarurl" v-model="avatar1">
                  </div>
                </div>
                <div class="modal-footer text-center">
                  <button type="button" @click="updateAvatar" data-dissmiss="modal" class="btn btn-outline-success">OK</button>
                  <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-3">
          <!-- Category -->
          <div class="col text-center mb-2">
            <h3>My Ranks</h3>
          </div>
        </div>
        <div class="row">
          <div class="col text-center">
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action">Normal</a>
              <a href="#" class="list-group-item list-group-item-action">Hard</a>
              <a href="#" class="list-group-item list-group-item-action">Insame</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-9">
        <div class="row m-3 text-center">
            <h1 id="timeline-text">Your Journey as A Bytes Hunter</h1>
        </div>
        <div class="row mb-2">
          <div class="container text-center">

            <game-card v-for="game in games" thumbnail-src="/static/logo.png" :game-src="'/game/'+game" :game-title="'test ' + game" last-update="1 mins ago"></game-card>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

  import gameCard from "./gameCard"

  const axios = require("axios");

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

      if (!DEV) {

        axios.get("/user/history", {
          params: {
            userid: this.$root.user.userid
          }
        }).then(function (res) {


        }).catch(function (err) {

        });
      }

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
