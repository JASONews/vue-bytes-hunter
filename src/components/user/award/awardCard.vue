<template lang="html">
  <div class="row m-4 award-border p-3">
    <div class="col">
      <img :src="awardImg" class="award-img">
    </div>
    <div class="col p-2 my-auto">
      <h5 class="award-text">{{ description }}</h5>
    </div>
  </div>
</template>

<script>

module.exports = {

  props:["awardImg", "description"],

  data: function () {
    return {
    }
  }
};
</script>

<style lang="css">
.award-img {
  width: 100px;
  height: 100px;
}

.award-border {
  border-width: 0.0em;
  border-color: yellow;
  border-style: solid;
  background: linear-gradient(to left bottom, rgba(186, 1, 38, .7), rgba(255, 45, 17,.5)), url("/static/img/symphony.png") repeat;
  /*background: linear-gradient(to left bottom, rgba(186, 1, 38, .7), rgba(255, 45, 17,.7));*/
}

.award-text {
  color: rgb(255,255,0);
}
</style>
