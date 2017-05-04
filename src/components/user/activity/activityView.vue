<template lang="html">

  <div class="row mb-2">
    <div class="container text-center">
      <activity-card v-for="a in activities" @join="subscribe" :activity="a" :joined="checkJoin(a)"></activity-card>
    </div>
  </div>
</template>

<script>

import activityCard from "./activityCard";

const axios = require('axios');

module.exports = {

  components: {
    activityCard
  },

  data: function () {
    return {
      activities: []
    }
  },

  mounted: function () {

    if (DEV) {
      this.activities = [
        {
          title: "a1",
          description: "a small event",
          address: "Online",
          activityBannerImageSrc: "/static/logo.png",
          activityId: "1",
          date: new Date(),
          urlLinktoPage: "//www.bilibili.com"
        }
      ]
    } else {
      var self = this;
      axios.get("/activity")
      .tnen(function (data) {
        self.activities = data;
      });
    }
  },

  computed: {

  },

  methods: {
    subscribe: function (data) {
      if (DEV) {
        console.log("sub");
        if (this.$root.user.activities.length == 0) {
          this.$root.user.activities = [{
            title: "a1",
            description: "a small event",
            address: "Online",
            activityBannerImageSrc: "/static/logo.png",
            activityId: "1",
            date: new Date(),
            urlLinktoPage: "//www.bilibili.com"
          }];
        } else {
          this.$root.user.activities = [];
        }
      } else {
        var self = this;
        axios.post("/activity/subscribe/"+data.op, data.id)
        .then(function (body) {
          console.log(body);
          self.$root.user.activities = body;
        })
        .catch(function (err) {
          console.log(err);
        });
      }
    },
    checkJoin: function (a) {
      var acs = this.$root.user.activities;
      for (var i of acs) {
        if (i.activityId == a.activityId) {
          return true;
        }
      }
      return false;
    }
  }

};
</script>

<style lang="css">
</style>
