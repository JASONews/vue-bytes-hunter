<template lang="html">
  <div class="col-sm-4">
    <div class="thumbnail">
      <a href="#" @click.prevent="updateGame">
        <a>
          <img :src="thumbnailSrc" alt="" class="rounded" width="200" height="200">
          <p>{{gameTitle}}</p>
        </a>
      </a>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: ["gameSrc", "gameTitle", "thumbnailSrc", "game"],
  data: function () {
    return {
    }
  },

  computed: {
    gamePage: function () {
      return "/game/"+this.game.gid;
    }
  },

  methods: {
    updateGame: function () {
      this.$root.currentGame = this.game;
      this.$router.push(this.gamePage);
    }
  }

}
</script>

<style lang="css">
</style>
