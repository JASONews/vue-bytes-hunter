<template lang="html">
  <div class="row ml-2" id="game-card-cmp">
    <div class="col-2 mt-4 timeline-date">
      <div class="h-50 dash-bottom">
        <p class="w-100 align-b w-100 pr-4 mb-1">{{date}}</p>
      </div>
      <div class="h-50">
        <p class="w-100">{{time}}</p>
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
    <div class="col-3 mt-5 ml-2 mb-3 game-card my-auto">

      <router-link tag="a" :to="gamePage">
        <img class="mt-4 mb-4" :src="score.game.thumbnail" width="100" height="100">
      </router-link>
      <div class="">
        <h3 class="text-success">{{score.score}} Bytes</h3>
      </div>
      <div class="">
        <a :href="'/game-list/'+score.difficulty" :class="'btn btn-sm ' + difficultyColor(score.difficulty, true)">
          {{score.difficulty.slice(0,1).toUpperCase()+score.difficulty.slice(1).toLowerCase()}}
        </a>
        <span :class="difficultyColor(score.game.difficulty, false)">
          <span class="fa-stack">
          <i class="fa fa-square-o fa-stack-2x" aria-hidden="true"></i>
          <i class="fa-stack-1x" style="font-style: initial;">L{{score.game.level}}</i>
        </span>
      </span>
      </div>

    </div>

    <div class="col-5 mt-5 mb-3">
      <div class="h-100 timeline-game-info mr-4 mt-4 mb-4">
        <div class="my-auto align-r">

          <a href="#" @click.prevent="updateGame" class=""><h3>

            {{score.game.name}}
          </h3></a>

        <br/>
          <p class="align-r"><a class="btn btn-outline-primary btn-sm category-tag" :href="'/game-list/'+tag" v-for="tag in score.game.categories.split(',')">{{tag}}</a></p><br/>
          <p :id="'description-paragraph-'+index" class="align-r game-description timeline-game-image mb-0">{{score.game.description}}
          </p>
          <div class="w-100 text-center read-more">
            <a href="#" @click.prevent="readMore">
              <i v-if="overflown && !descriptionShown" class="fa fa-2x fa-angle-double-down text-success" aria-hidden="true"></i>
              <i v-if="overflown && descriptionShown" class="fa fa-2x fa-angle-double-up text-success" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: ["score", "index"],
  data: function () {
    return {
      descriptionShown: false,
      overflown: false
    }
  },
  computed: {
    date: function () {
      return this.score.date.toLocaleDateString();
    },
    time: function () {
      return this.score.date.toLocaleTimeString();
    },
    gamePage: function () {
      return "/game/"+this.score.gid;
    }
  },

  mounted: function () {
    this.overflown = this.overflowed();
    this.descriptionShown = !this.overflown;
  },

  methods: {
    updateGame: function () {
      this.$root.currentGame = this.score.game;
      this.$router.push(this.gamePage);
    },

    overflowed: function () {
      var e = document.getElementById('description-paragraph-'+this.index);
      if (e.scrollHeight > e.clientHeight) {
        return true;
      } else {
        return false;
      }
    },

    readMore: function () {
      var e = $("#description-paragraph-"+this.index);
      // var pe = $("#game-card-cmp");
      // var pheight = Number(pe.css('height').slice(0,-2));
      // var diff = e.prop('scrollHeight')-this.client_height;
      if (this.descriptionShown) {
        e.css({
          'overflow-y': 'scroll',
          'max-height': '10em'
          // 'height': this.client_height +'px'
        });
        // pe.css('height', (pheight-diff)+'px');
        this.descriptionShown = false;
      } else {
        e.css({
          'overflow-y': 'visible',
          'max-height': '1000em'
          // 'height': e.prop('scrollHeight')+'px'
        });
        // pe.css('height', (pheight+diff)+"px");
        this.descriptionShown = true;
      }
    },
    difficultyColor: function (diff, isBtn) {
      var ret = "";
      switch (diff) {
        case "normal":
          ret = 'primary';
          break;
        case "hard":
          ret = 'warning';
          break;
        case "insane":
          ret = 'danger';
          break;
        default:
      }
      if (isBtn)
        return "btn-outline-"+ret;
      else {
        return "text-"+ret;
      }
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
  border-bottom-width: .3rem;
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

.align-r {
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

.category-tag {
  margin: 2px;
}

.game-description {
  color: darkgray;
  overflow-y: scroll;
  max-height: 10em;
}

.read-more:hover {
  opacity: .7;
}


.score {
}

</style>
