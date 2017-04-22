<template lang="html">
  <div class="col-sm-4">
    <div class="thumbnail">
      <router-link :to="gameSrc">
        <a>
          <img :src="thumbnailSrc" alt="">
          <p>{{gameTitle}}</p>
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: ["gameSrc", "gameTitle", "thumbnailSrc"],
  data: function () {
    return {
    }
  }

}
</script>

<style lang="css">
</style>
