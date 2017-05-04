<template lang="html">
  <div class="row m-4 card-border p-3">
    <div class="col-4 my-auto">
      <img :src="activity.activityBannerImageSrc" class="card-img">
    </div>
    <div class="col-4 p-2 my-auto">
      <h3 class="card-title">{{activity.title}}</h3>
      <h5 class="card-text">{{ activity.description }}</h5>
    </div>
    <div class="col-4 my-auto">
      <button type="button" @click="join" :class="[ joined ? 'unsubscribeBtn': 'subscribeBtn', 'btn', joined ? 'btn-success': 'btn-outline-success']" ><span :class="[joined? 'unSubscribeText' : 'subscribeText']"></span></button>
    </div>
  </div>
</template>

<script>

module.exports = {
  props:["activity","joined"],

  methods: {
    join: function () {
      this.$emit("join", {
        id: this.activity.activityId,
        op: this.joined ? '1' : '0'
      });
    }
  }
};
</script>

<style lang="stylus">

.card-border {
  border-width: 0.0em;
  border-color: yellow;
  border-style: solid;
  background: linear-gradient(to bottom right, rgba(127,255,212,.7), rgba(255,255,0,.7));
}
.card-img {
  width: 100px;
  height: 100px;
}

.card-title {
  color: darkgreen;
}

.card-text {
  color: green;
}

.subscribeBtn > .subscribeText::after {
  content: "Subscribe";
  transition: 0.5s;
}

.unsubscribeBtn > .unSubscribeText::after {
  content: "Subscribed";
  transition: 0.5s;
}

.unsubscribeBtn:hover {
    border-color: rgb(217,83,79);
    background-color: rgb(217,83,79);
}

.unsubscribeBtn:hover > .unSubscribeText::after {
  content: "Unsubscribe";
}


</style>
