<template>
<div>
  <div class="jumbotron jumbotron-fluid h-100">
    <div class="container text-center h-100">
        <h2>Welcome to the World of Bytes Hunters</h2>
        <br/>
        <div id="phaserMount"></div>
        <div id="gameView"></div>
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

      // Game script
      if (DEV) {
        this.loadScript("/static/js/testgame.js", "phaserGameMount");
      }
    },

    methods: {
      loadScript: function (src, mountId) {
        var d = document
        var s = d.createElement('script');
        s.src = src;
        s.async = false;
        d.getElementById(mountId).appendChild(s);
      }
    }

  };

</script>

<style lang="css">
 canvas {
   margin: auto;
 }
</style>
