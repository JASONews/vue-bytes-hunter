<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <!-- lists -->
        <br>
        <br>
        <div class="row">
          <!-- Level of difficulty-->
          <div class="col">
            <list-component :options="levelOptions" single="false" @selected="select" title="LEVEL"></list-component>
          </div>
        </div>


        <div class="row my-auto">
          <!-- Category -->
          <div class="col">
            <list-component :options="categoryOptions" single="false"  @selected="select" title="CATEGORY"></list-component>
          </div>

        </div>
      </div>


      <div class="col-8">
        <!-- Display thumbnails of games -->
        <div class="row m-4">
          <div class="col text-center">
            <h2>Games</h2>
          </div>
          <div class="col">
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="text" placeholder="Search" v-model="searchInput">
              <button @click.prevent="submitSearch" class="btn btn-outline-success my-2 my-sm-0">Search</button>
            </form>
          </div>
        </div>
        <div class="row text-center">
          <search-card v-for="game in shown" :game="game" :game-src="'/game/'+game.url" :game-title="game.name" :thumbnail-src="game.thumbnail"></search-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import searchCard from "./searchCard";
  import listComponent from "./listComponent";

  const axios = require('axios');

  module.exports = {
    components: {
      searchCard,
      listComponent
    },

    props: ['name'],

    computed: {
      shown: function () {
        var showns = [];
        var regex = ".*";
        for (var c of this.searchInput) {
          regex+=c;
          regex+=".*";
        }
        for (var i =0; i < this.games.length; i++) {
          if (this.games[i].name.match(regex)) {
            showns.push(this.games[i]);
          }
        }
        var self = this;
        return showns.filter(function(e){
          if (self.levelOptions[0].active) {
            return true;
          }
          for (var i of self.levelOptions) {
            if (i.active && e.difficulty.toLowerCase() == i.name.toLowerCase()) {
              return true;
            }
          }
          return false;
        }).filter(function (e) {
          if (self.categoryOptions[0].active) {
            return true;
          }
          for (var i of self.categoryOptions) {
            if (i.active && e.categories.split(",").map(x => x.toLowerCase()).includes(i.name.toLowerCase())) {
              return true;
            }
          }
          return false;
        });
      }
    },

    data: function () {
      return {
        searchInput: "",
        games: [],
        levelOptions: [
          {
            name: "ALL",
            active: true
          },
          {
            name: "NORMAL",
            active: false
          },
          {
            name: "HARD",
            active: false
          },
          {
            name: "INSANE",
            active: false
          },
        ],
        categoryOptions: [
          {
            name: "ALL",
            active: true
          },
          {
            name: "Data Type",
            active: false
          },
          {
            name: "Theory",
            active: false
          },
          {
            name: "Logic",
            active: false
          }
        ]
      };
    },

    methods: {
      select:function (el) {
        if (el.title == "LEVEL") {
          for (var i of this.levelOptions) {
            if (i.name == el.opt.name) {
              i.active = el.opt.active;
              break;
            }
          }
        } else {
          for (var i of this.categoryOptions) {
            if (i.name == el.opt.name) {
              i.active = el.opt.active;
              break;
            }
          }
        }
      },
      submitSearch: function () {
        console.log(this.searchInput);
        // this.$router.push("/game-list/"+this.searchInput);
      },
      levelTransform: function(l) {
        if (l.toLowerCase() == "normal")
          return 1;
        else if (l.toLowerCase() == "hard")
          return 2;
        else
          return 3;
      }
    },

    mounted: function () {
      if (DEV) {
        for (var i =0; i < 10; i++) {
          var n = "game "+i;
          this.games.push({
            gid: i,
            name: "game "+i,
            difficulty: i < 5 ? "normal" : (i >= 8 ? "insane" : "hard"),
            categories: i < 5  ? "Data Type" : "theory",
            url: "/static/js/testgame.js",
            thumbnail: "https://storage.googleapis.com/bytehunter_images/flood-fill.jpg"
          });
        }
      } else {
        var self = this;
        axios.get("/search/games").then(function (games) {
          self.$set(self.games,games);
          self.$root.games = games;
        });
      }
    }
  };
</script>
