<template lang="html">
  <div class="row ml-2">
    <div class="col-2 mt-4 timeline-date">
      <div class="h-50 dash-bottom">
        <p class="w-100 align-b w-100 pr-4 mb-1">{{date}}</p>
      </div>
      <div class="h-50">
        <p class="w-100">{{lastUpdate}}</p>
      </div>

    </div>
    <div class="col-1 ml-2 pr-0 dash-left" >
      <div class=" h-50"><i class="fa fa-caret-right caret fa-2x" aria-hidden="true"></i>
        <!--<p class="w-100 align-b timeline-text">{{lastUpdate}}</p>-->
      </div>
      <div class=" h-50">
        <!-- <p class="w-100 timeline-text">{{lastUpdate}}</p> -->
      </div>
    </div>
    <div class="col-3 timeline-game-image mt-5 ml-2 mb-3 game-card">
      <router-link tag="a" :to="gameSrc">
        <img class="mt-4 mb-4" :src="thumbnailSrc" width="100" height="100">
      </router-link>
    </div>
    <div class="col-4 timeline-game-image mt-5 mb-3">
      <div class="h-100 timeline-game-info mr-4 mt-4 mb-4">
        <p class="my-auto align-l">
          <router-link tag="a" :to="gameSrc" class=""><h3>{{gameTitle}}</h3></router-link><br/>
          <p class="align-l">Short descripton here</p>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: ["gameSrc", "gameTitle", "lastUpdate", "thumbnailSrc"],
  data: function () {
    return {
    }
  },
  computed: {
    date: function () {
      return new Date().toLocaleDateString().split("/").slice(0,2).join("/");
    }
  }
}
</script>

<style lang="stylus">

lightgreen-50 = rgba(144,238,144, 0.5)

.game-card-img {
  max-height: 200px;
  max-width: 200px;
}
.dash-left {
  /*border-left: dashed;*/
  border-left-width: 0.2em;
  border-left-color: lightgreen-50;
  border-left-style: solid;
}
.dash-bottom {
  border-bottom-width: 0.2em;
  border-bottom-color: forestgreen;
  border-bottom-style: solid;
}
.timeline-game-info {
  /*text-align: left;*/

}

.timeline-game-image {
  border-bottom-style: solid;
  border-bottom-color: lightgreen;
  border-bottom-width: .1rem;
}

.timeline-game-image-left {
  border-left-style: solid;
  border-left-color: darkgray;
  border-left-width: .1rem;
}

.align-b {
  position: absolute;
  bottom: 50%;
}

.timeline-text {
  text-decoration: none;
  color: darkslategray;
  text-align: center;
}

.align-l {
  text-align: left;
}

.align-l {
  text-align: right;
}
.caret {
  position: absolute;
  top: 50%;
  left: 0em;
  color: lightgreen-50;
}

.dash-right {
  border-right-width: 0.2em;
  border-right-color: lightgreen;
  border-right-style: dashed;
}

.game-card:hover {
  background-color: ivory;
}

.timeline-date {
  opacity: 0.5;
}

.timeline-date:hover {
  opacity: 1;
}
</style>
