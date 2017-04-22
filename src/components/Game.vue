<template>
	<div>
		<div class="row">
			<div id="gameView">
			</div>
			<img id="gameimg" src="https://storage.googleapis.com/bytehunter_images/game-img01.png" alt="flood-fill">
		</div>
		<label for="fav">fav</label>
		<input type="checkbox" id='fav'>
		<div class='row'>
			<div class="btn-group">
			  <a :href="prev" type="button" class="btn btn-default">Prev</a>
			  <a :href="next" type="button" class="btn btn-default">Next</a>
			</div>
		</div>
		<div class="row">
			<div id="disqus_thread"></div>
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
		 	disqus_config : function () {
		    this.page.url = windows.location;  // Replace PAGE_URL with your page's canonical URL variable
		    this.page.identifier = windows.location; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
			}
		};
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
		// online: function(){
		// 	console.log(this.$root.user);
		// 	return this.$root.user != null;
		// }
	},

	mounted: function () {
		var d = document, s = d.createElement('script');

		s.src = 'https://bytehunter.disqus.com/embed.js';

		s.setAttribute('data-timestamp', +new Date());
		(d.head || d.body).appendChild(s);
	}
};

</script>

<style>
body {
  padding-top: 50px;
}

#gameimg {
	padding-top: 40px;
	width: 1150px;
	height: 75%;
}
</style>
