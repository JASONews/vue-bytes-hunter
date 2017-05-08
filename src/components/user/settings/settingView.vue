<template lang="html">

  <div class="row mb-2">
    <div class="container text-center">

      <div class="row p-2">
        <div class="col my-auto">
          <img :src="this.$root.user ? this.$root.user.thumbnail : ''" class="rounded img-thumbnail">
        </div>

        <div class="col my-auto">
          <button type="button" @click="beforeShown" data-toggle="modal" data-target="#avatarModal" class="btn btn-outline-success">Change Avatar</button>
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
};
</script>

<style lang="css">
.modal-btn-size{
  width: 30%;
}
</style>
