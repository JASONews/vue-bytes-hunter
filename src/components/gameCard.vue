<template lang="html">
  <div class="card mb-3">
    <a :href="gameSrc">
    <img class="card-img-top game-card-img" :src="thumbnailSrc" alt="Card image cap" width="100" height="100">
  </a>
    <div class="card-block">
      <h4 class="card-title">{{gameTitle}}</h4>
      <p class="card-text"><small class="text-muted">Last updated {{lastUpdate}}</small></p>
    </div>
  </div>

</template>

<script>
module.exports = {
  props: ["gameSrc", "gameTitle", "lastUpdate", "thumbnailSrc"],
  data: function () {
    return {
    }
  }
}
</script>

<style lang="css">
.game-card-img {
  max-height: 200px;
  max-width: 200px;
}
</style>
