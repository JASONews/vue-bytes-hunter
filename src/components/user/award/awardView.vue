<template lang="html">

  <div class="row mb-2">
    <div class="container text-center">

      <award-card v-for="a in awards" :description="a.description" :award-img="awardsImageList[a.title]"></award-card>

    </div>
  </div>

</template>

<script>
import awardCard from "./awardCard"
import awardsImageSource from "./awardsImageSource"

const axios = require('axios');

module.exports = {

  components: {
    awardCard
  },

  data: function () {
    return {
      awards: [],
      awardsImageList: {}
    }
  },

  mounted: function () {
    this.awardsImageList = awardsImageSource;
    if (DEV) {

      this.awards = [
        {
          description: "demo award",
          title: "level1"
        },
        {
          description: "demo award 2",
          title: "level2"
        }
      ];

    } else {
      this.awards = this.$root.user.awards;
    }
  }

};
</script>

<style lang="css">
</style>
