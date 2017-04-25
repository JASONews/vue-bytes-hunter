<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<div id="gameView">
				</div>
			</div>
		</div>
			<!-- <img id="gameimg" src="https://storage.googleapis.com/bytehunter_images/game-img01.png" alt="flood-fill"> -->
		<div class="row">
			<div class="col">
				<label for="fav">fav</label>
				<input type="checkbox" id='fav'>
				<div v-if="online" class='row'>
					<div class="btn-group">
						<router-link tag="a" :to="prev" type="button" class="btn btn-default">Prev</router-link>
						<router-link tag="a" :to="next" type="button" class="btn btn-default">Next</router-link>
					</div>
				</div>
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
		}
	},

	mounted: function () {
		var d = document, s = d.createElement('script');

		s.src = '//bytehunter.disqus.com/embed.js';

		s.setAttribute('data-timestamp', +new Date());
		(d.head || d.body).appendChild(s);
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
</style>
