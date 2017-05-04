<template lang="html">

    <div class="row mb-2">
      <div class="container text-center">
        <game-card v-for="score in scores" :score="score"></game-card>
      </div>
    </div>

</template>

<script>

import gameCard from "./gameCard"

module.exports = {

  components: {
    gameCard
  },

  data: function () {
    return {
      scores: []
    }
  },

  mounted: function() {

    if (DEV) {
      this.scores.push({
        level: 1,
        difficulty: "normal",
        gid: "1",
        score: 100,
        date: new Date(),
        game: {
          gid: "1",
          name: "test game 1",
          difficulty: "normal",
          level: 1,
          url: "/static/js/testgame.js",
          categories: "data type,theory",
          thumbnail: "/static/logo.png",
          material: "data type material",
          description: " a data type game"
        }
      });
    } else {
      axios.get("/user/history", {
        params: {
          userid: this.$root.user.userid
        }
      }, ).then(function (res) {
        this.scores = this.mergeGamesAndScores(res.games, res.scores);
      }).catch(function (err) {
        console.log(err);
      });
    }
  },

  computed: {
    gameList: function () {

    }
  },

  methods: {
    mergeGamesAndScores: function (games, scores) {
      for (var score of scores) {
        for (var game of games) {
          if (score.gid == game.gid) {
            score.game = game;
          }
        }
      }
      return scores;
    }
  }

};

</script>

<style lang="css">
</style>
