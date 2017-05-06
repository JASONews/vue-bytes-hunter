<template lang="html">
  <div class="">
    <br>
    <br>
    <div class="row m-1">
      <!-- Level of difficulty-->
      <div class="col">
        <div id="app-user-info row">
          <div class="col text-center">
            <img :src="this.$root.user ? this.$root.user.thumbnail : ''" class="rounded img-thumbnail">
          </div>
        </div>
        <div class="row m-2">
          <div class="col text-center mt-2">
            <button type="button" @click="beforeShown" data-toggle="modal" data-target="#avatarModal" class="btn btn-outline-success">Change Avatar</button>
          </div>
        </div>

      </div>

      <div id="avatarModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-body">
              <div class="form-group">
                <label for="avatarurl" class="control-label w-100 text-center pt-3"><h3>Avatar Url</h3></label>
                <textarea type="text" rows="3" class="form-control" id="avatarurl" v-model="avatar"></textarea>
              </div>
              <div class="text-center">
                <div class="w-100">
                  <button type="button" @click="updateAvatar" class="btn btn-outline-success modal-btn-size mr-1">OK</button>
                  <button type="button" class="btn btn-outline-danger modal-btn-size ml-1" data-dismiss="modal">Cancel</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <!-- Category -->
      <div class="col text-center mb-2">
        <h3 class="rank-title">My Scores</h3>
      </div>
    </div>
    <div class="row mt-3 pl-2 pr-2">
      <div class="col text-center my-auto">
        <div class="list-group user-rank">
          <a class="list-group-item list-group-item-action justify-content-between">Normal<span class="badge badge-primary badge-pill">{{this.$root.user.normalScore}}</span></a>
          <a class="list-group-item list-group-item-action justify-content-between">Hard<span class="badge badge-warning badge-pill">{{this.$root.user.hardScore}}</span></a>
          <a class="list-group-item list-group-item-action justify-content-between">Insame<span class="badge badge-danger badge-pill">{{this.$root.user.insaneScore}}</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      avatar: ""
    }
  },

  methods: {
    updateAvatar: function () {
      this.$root.user.thumbnail = this.avatar;
      $("#avatarModal").modal("hide");
    },

    beforeShown: function () {
      if (this.$root.user)
        this.avatar = this.$root.user.thumbnail;
    }
  }
}
</script>

<style lang="css">
.modal-btn-size{
  width: 30%;
}

.user-rank {
}

.user-rank a {
  /*background-color: rgba(179, 234, 147,.5);*/
  background-color: inherit;
  color: rgb(237, 68, 7);
  /*background: linear-gradient(to left, rgba(79, 204, 87, .7), rgba(179, 234, 147,.5));*/
}

.user-rank a:hover {
  background-color: rgba(179, 234, 147,.2);
}

.rank-title {
  color: rgb(237, 68, 7);
}
</style>
