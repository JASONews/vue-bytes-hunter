<template lang="html">

  <div id="bugModal" class="modal fade" role="dialog">
    <div class="modal-dialog modal-lg">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-group">
            <label for="bugText" class="control-label w-100 text-center pt-3"><h3 class="text-primary">Bug Report</h3></label>
            <textarea placeholder="Put your report here" type="text" rows="10" class="form-control" id="bugText" v-model="content"></textarea>
          </div>
          <div class="text-center">
            <div class="w-100">
              <button type="button" @click="submitBug" class="btn btn-outline-success modal-btn-size mr-1">Submit</button>
              <button type="button" class="btn btn-outline-danger modal-btn-size ml-1" data-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>

const axios = require('axios');

module.exports = {
  props: ["gid"],

  data: function () {
    return {
      content: ""
    }
  },

  methods: {
    submitBug: function () {
      if (DEV) {
        console.log(this.content);
      } else {
        var self = this;
        axios.post("/game/bug/"+this.gid, {
          date: new Date(),
          content: self.content,
          authorId: self.$root.user.id,
          authorName: self.$root.user.name
        }).then(function (res) {
          alert("bug reported");
        })
      }
      $("#bugModal").modal('hide');
    }
  }
};
</script>

<style lang="css">
</style>
