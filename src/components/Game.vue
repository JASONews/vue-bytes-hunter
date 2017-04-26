<template>
	<div class="container">
		<div class="row">
			<div class="col">
        <div id="phaserMount"></div>
				<div id="gameView" class="m-3 text-center">
				</div>
        <div id="phaserGameMount"></div>
			</div>
		</div>
			<!-- <img id="gameimg" src="https://storage.googleapis.com/bytehunter_images/game-img01.png" alt="flood-fill"> -->
		<div class="row m-3 text-center">
			<div class="col-2">
						<router-link tag="button" :to="prev" type="button" class="btn btn-primary">Prev</router-link>
      </div>
      <div class="col-8 my-auto">
        <label for="fav">fav</label>
        <input type="checkbox" id='fav'>
      </div>
      <div class="col-2">
          <router-link tag="button" :to="next" type="button" class="btn btn-secondary">Next</router-link>
			</div>
		</div>

		<div class="row">
			<div class="col">
				<div id="disqus_thread"></div>
			</div>
		</div>

	</div>

</template>

<script>
		/**
		 *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
		 *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
		 */
		/*
		var disqus_config = function () {
				this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
				this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
		};
		*/
module.exports = {

	props: ["id"],

	data: function() {
	 return {
      cdn: "/static/js/",
		 	disqus_config: function() {
		 		this.page.url= windows.location; // Replace PAGE_URL with your page's canonical URL variable
		 		this.page.identifier= windows.location; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
		  }
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
        this.loadScript(this.cdn+this.id, "phaserGameMount");
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

		// Game script
    if (DEV) {
      this.loadScript("/static/js/testgame.js", "phaserGameMount");
    } else {
        this.loadScript(this.cdn+this.id, "phaserGameMount");
    }

    this.$root.bus.$on("gameFinish", function (data) {
      console.log("score is "+data);
    });

		// window.disqus_config = function() {
			// window.page.url= windows.location.origin; // Replace PAGE_URL with your page's canonical URL variable
			// window.page.identifier= windows.location.pathname; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
	//  };
	}
};

</script>

<style>

#gameimg {
	padding-top: 40px;
	width: 1150px;
	height: 75%;
}

canvas {
  margin: auto;
}

</style>
