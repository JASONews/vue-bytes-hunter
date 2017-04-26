<template lang="html">
 <div class="row">
    <div class="col-3 pr-0">
        <div class="dash-left dash-bottom h-50"><i class="fa fa-caret-right caret fa-2x" aria-hidden="true"></i><p class="w-100 align-b text-center timeline-text">{{lastUpdate}}</p></div>
        <div class="dash-left h-50"></div>
    </div>
    <div class="col-4 timeline-game-image ml-2 mb-3">
          <router-link tag="a" :to="gameSrc">
            <img class="mt-4 mb-4" :src="thumbnailSrc" width="100" height="100">
          </router-link>
    </div>
    <div class="col-4 timeline-game-image mb-3">
        <div class="h-100 timeline-game-info mr-4 mt-4 mb-4">
        <p class="my-auto align-l">
         <router-link tag="a" :to="gameSrc" class=""><h3>{{gameTitle}}</h3></router-link><br/>
         <p class="align-l">Short descripton here</p>
</p>
</div>
    </div>
 </div>
  <!--<div class="card mb-3">-->
    <!--<router-link tag="a" :to="gameSrc">-->
      <!--<img class="card-img-top game-card-img" :src="thumbnailSrc" alt="Card image cap" width="100" height="100">-->
    <!--</router-link>-->
    <!--<div class="card-block">-->
      <!--<h4 class="card-title">{{gameTitle}}</h4>-->
      <!--<p class="card-text"><small class="text-muted">Last updated {{lastUpdate}}</small></p>-->
    <!--</div>-->
  <!--</div>-->




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
    .dash-left {
        /*border-left: dashed;*/
        border-left-width: 0.2em;
        border-left-color: lightgreen;
        border-left-style: solid;
    }
  .dash-bottom {
    border-bottom-width: 0.2em;
    border-bottom-color: lightgray;
    border-bottom-style: dashed;
  }
  .timeline-game-info {
    /*text-align: left;*/

  }

  .timeline-game-image {
    border-bottom-style: solid;
    border-bottom-color: darkgray;
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
    color: lightslategray;
  }

  .align-l {
    text-align: left;
  }

  .caret {
    position: absolute;
    top: 40%;
    left: 0.5em;
    color: lightgreen;
  }
</style>
