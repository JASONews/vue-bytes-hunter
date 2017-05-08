<template>
<div class="h-100">
  <div class="jumbotron-fluid h-100 jumbotron-custom">
    <br/>
    <div class="container text-center">
        <!-- <h2>Welcome to the World of Bytes Hunters</h2> -->
        <!-- <br/> -->
        <div id="phaserMount"></div>
        <div id="tryOneCover" class="m-auto">
            <span id="tryOneSpan"><a href="#" id="tryOneBtn" class="btn btn-outline-warning btn-lg" @click.prevent="startGame">Click to try one</a></span>
        </div>
        <div id="gameView">
        </div>
        <div id="phaserGameMount"></div>
        <!-- <h4><a href="/game/1">Get Started</a></h4> -->
    </div>
  </div>

  <!-- <div class="container-fluid text-center bg-grey">
    <h2>How does it work</h2>
    <div class="row text-center">
        <div class="col-sm-4">
            <div class="thumbnail">
                <h4><strong>Leaning with Games</strong></h4>
                <img src="https://storage.googleapis.com/bytehunter_images/game.png" alt="learning" />
            </div>
        </div>
        <div class="col-sm-4">
            <div class="thumbnail">
                <h4><strong>Easy to Start</strong></h4>
                <img src="https://storage.googleapis.com/bytehunter_images/easy-start.png" alt="easy-to-start" />
            </div>
        </div>
        <div class="col-sm-4">
            <div class="thumbnail">
                <h4><strong>Powerful Ranking System</strong></h4>
                <img src="https://storage.googleapis.com/bytehunter_images/ranking.png" alt="ranking" />
            </div>
        </div>
    </div>
  </div> -->
</div>
</template>

<script>

  module.exports = {
    mounted: function () {
      this.loadScript("https://cdnjs.cloudflare.com/ajax/libs/phaser/2.6.2/phaser.js", "phaserMount");
    },

    methods: {
      loadScript: function (src, mountId) {
        var d = document
        var s = d.createElement('script');
        s.src = src;
        s.async = false;
        d.getElementById(mountId).appendChild(s);
      },

      startGame: function () {
        $("#tryOneCover").attr("hidden", true);
        if (DEV) {
          this.loadScript("/static/js/testgame.js", "phaserGameMount");
        }
      }
    }

  };

</script>

<style lang="css">
 canvas {
   margin: auto;
   border-radius: 10px;
 }

 .jumbotron-custom {
   background: rgba(0,0,0,.9);
 }

 #tryOneCover {
   width: 800px;
   height: 600px;
   min-width: 800px;
   min-height: 600px;
   max-width: 800px;
   max-height: 600px;
   border-radius: 10px;
   background:  linear-gradient(to top left, rgba(30,30,30,.8), rgba(50,50,50,0.8), rgba(70,70,70,0.7), rgba(200,200,200,.7)), url("/static/img/bytepathsample.png");
 }

 #gameView {
   border-radius: 10px;
 }

 #tryOneSpan {
   /*position: absolute;
   top: 45%;
   left: 45%;*/
   line-height: 600px;
   vertical-align: middle;;
 }


</style>
