<template>
	<div class="container h-100 w-100 pl-0 pr-0">
		<div class="row w-100 h-100 mr-0 ml-0 gameBackground">
			<div class="col">
        <div id="phaserMount"></div>
				<div id="gameView" class="m-3 text-center">
				</div>
        <div id="phaserGameMount"></div>
			</div>
		</div>
			<!-- <img id="gameimg" src="https://storage.googleapis.com/bytehunter_images/game-img01.png" alt="flood-fill"> -->
		<div class="row m-3 text-center">
			<div class="col-4">
      </div>
      <div class="col-4 my-auto">
				<div class="btn-group">
					<router-link tag="button" :to="prev" type="button" class="btn btn-primary">Prev</router-link>
					<a @click="like" class="btn btn-secondary"><i :class="['fa text-danger', isLike ? 'fa-heart' : 'fa-heart-o']" aria-hidden="true"></i></a>
					<router-link tag="button" :to="next" type="button" class="btn btn-success">Next</router-link>
				</div>
      </div>
      <div class="col-4">
				<button type="button" class="btn btn-outline-danger" data-toggle="modal" data-target="#bugModal">Bug Report</button>
			</div>
		</div>

		<div class="row pr-5 pl-5">
			<div class="col">
				<div id="disqus_thread"></div>
			</div>
		</div>

		<bug-report :gid="id"></bug-report>

	</div>

</template>

<script>

import bugReport from "./bugReport";

const axios = require('axios');

module.exports = {

	components: {
		bugReport
	},

	props: ["id"],

	data: function() {
	 return {
      cdn: "/static/js/",
		 	disqus_config: function() {
		 		this.page.url= windows.location; // Replace PAGE_URL with your page's canonical URL variable
		 		this.page.identifier= windows.location; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
		  },
			isLike: false
			}
	},

	computed: {
		prev: function() {
			return ''+(Number(this.id) > 0 ? Number(this.id) - 1 : 0);
		},
		next: function() {
			return ''+(Number(this.id) +1);
		},
		online: function(){
			console.log(this.$root.user);
			return this.$root.user != null;
		}


	},

	methods: {
	    loadScript: function (src, mountId) {
        var d = document
        var s = d.createElement('script');
        s.src = src;
        s.async = false;
        d.getElementById(mountId).appendChild(s);
      },

			like: function () {
				if (DEV) {
					this.isLike = !this.isLike;
				} else {
					axios.get("/user/like/"+this.id, function (res) {
						if (res.status == "OK") {

							this.isLike = !this.isLike;

							if (this.isLike) {
								this.$root.user.likedGames.push(this.id);
							} else {
								for (var i in this.$root.user.likedGame) {
									if (this.$root.user.likedGame[i] == this.id) {
										this.$root.user.likedGames.remove(i);
										break;
									}
								}
							}

						}

					});
				}
			}
	},

	watch: {
		'$route' (to, from) {
			console.log(to, from);
			window.DISQUS.reset({
			  reload: true,
			  config: function () {
			    // this.page.identifier = to.fullPath;
			    // this.page.url = window.location.origin;
			  }
			});
      $("#gameView").empty();
      $("#phaserGameMount").empty();
			if (DEV) {
				this.loadScript("/static/js/testgame.js", "phaserGameMount");
			} else {
				this.loadScript(this.$root.currentGame.url, "phaserGameMount");
			}
		}
	},

	mounted: function () {
		var d = document, s = d.createElement('script');

		s.src = '//bytehunter.disqus.com/embed.js';

		s.setAttribute('data-timestamp', +new Date());
		(d.head || d.body).appendChild(s);

		//Phaser Lib
    this.loadScript("https://cdnjs.cloudflare.com/ajax/libs/phaser/2.6.2/phaser.js", "phaserMount");
		if (!this.$root.user) {
			var self = this;
			setTimeout(function () {
				self.isLike = self.$root.user.likedGames.includes(this.id);
			}, 2000);
		} else {
			this.isLike = this.$root.user.likedGames.includes(this.id);
		}


		// Game script
    if (DEV) {
      this.loadScript("/static/js/testgame.js", "phaserGameMount");
    } else {
			// load game info
			this.loadScript(this.$root.currentGame.url, "phaserGameMount");
    }

		//TODO: prvent events cascade
    this.$root.bus.$on("gameFinish", function (data) {
      console.log("score is "+data);
			axios.post("/game/"+this.id+"/save", (function () {
				return {
					uid: this.$root.user.id,
					gid: this.id,
					date: new Date(),
					score: data
				}
			})()).then(function (res) {

			}).catch(function (err) {

			});
		});
	}
};

</script>

<style>

#gameimg {
	padding-top: 40px;
	width: 1150px;
	height: 75%;
}

.gameBackground {
	background-color: black;
}

canvas {
	margin: auto;
}

</style>
