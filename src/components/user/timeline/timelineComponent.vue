<template lang="html">

    <div class="row mb-2">
      <div class="container text-center">
        <game-card v-for="(score,index) in scores" :score="score" :index='index'></game-card>
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
          description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt dictum enim, nec ullamcorper dui iaculis eu. Etiam est elit, egestas nec leo ut, ullamcorper congue enim. Fusce placerat justo ut congue feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam pellentesque lorem justo, sit amet dignissim nulla ullamcorper in. Aliquam blandit purus vitae enim porta, et dictum massa mollis. Nunc mollis, elit non tincidunt elementum, arcu ipsum consequat lacus, quis porta erat lectus vitae elit. Integer a sem lacus. In ultricies lacinia mauris. Nullam leo diam, tincidunt id aliquet id, rutrum sed dolor.a data type game"
        }
      },
      {
        level: 3,
        difficulty: "hard",
        gid: "2",
        score: 100,
        date: new Date(),
        game: {
          gid: "2",
          name: "test game 1",
          difficulty: "hard",
          level: 3,
          url: "/static/js/testgame.js",
          categories: "data type,theory",
          thumbnail: "/static/logo.png",
          material: "data type material",
          description: " a data type game"
        }
      },
      {
        level: 5,
        difficulty: "insane",
        gid: "3",
        score: 100,
        date: new Date(),
        game: {
          gid: "3",
          name: "test game 1",
          difficulty: "insane",
          level: 5,
          url: "/static/js/testgame.js",
          categories: "data type,theory",
          thumbnail: "/static/logo.png",
          material: "data type material",
          description: " a data type game"
        }
      },
      {
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
      var self = this;
      axios.get("/user/history", {
        params: {
          userid: this.$root.user.id
        }
      }, ).then(function (res) {
        self.scores = self.mergeGamesAndScores(res.games, res.scores);
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
            break;
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
