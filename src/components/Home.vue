<template>
<div>
  <div class="jumbotron text-center">
    <div class="container">
        <h2>Welcome to the World of Bytes Hunters</h2>
        <br/>
        <h4><a v-bind:href="'/game-list'">Get Started</a></h4>
    </div>
  </div>

  <div class="container-fluid text-center bg-grey">
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
  </div>
</div>
</template>

<script type="text/javascript">
console.log("loaded login js");
function login() {
  console.log("clicked");
  $(".loginBtn")[0].click();
}
</script>
