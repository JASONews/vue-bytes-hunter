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
						<list-component :options="levelOptions" @selected="select" title="LEVEL"></list-component>
					</div>
				</div>


				<div class="row my-auto">
					<!-- Category -->
					<div class="col">
						<list-component :options="categoryOptions" @selected="select" title="CATEGORY"></list-component>
					</div>

				</div>
			</div>


			<div class="col-8">
				<!-- Display thumbnails of games -->
				<h2>Games</h2>
				<h5>Choose a Category</h5>
				<div class="row text-center">
					<search-card v-for="game in shown" :game-src="'/game/'+game.url" :game-title="game.title" :thumbnail-src="game.thumbnail"></search-card>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import searchCard from "./searchCard";
	import listComponent from "./listComponent";

	module.exports = {
		components: {
			searchCard,
			listComponent
		},

		props: ['name'],

		computed: {
			shown: function () {
				var showns = [];
				for (var i =0; i < this.games.length; i++) {
					if (this.name == "*" || this.games[i].title.match(".*"+this.name+".*")) {
						showns.push(this.games[i]);
					}
				}
				var self = this;
				return showns.filter(function(e){
					if (self.levelOptions[0].active) {
						return true;
					}
					for (var i of self.levelOptions) {
						if (i.active && e.level == i.name) {
							return true;
						}
					}
					return false;
				}).filter(function (e) {
					if (self.categoryOptions[0].active) {
						return true;
					}
					for (var i of self.categoryOptions) {
						if (i.active && e.categories.includes(i.name)) {
							return true;
						}
					}
					return false;
				});
			}
		},

		// watch: {
		// 	'$route' (from, to) {
		// 		console.log(this.name);
		// 		var id = this.name;
		// 		var shown = [];
		// 		for (var i =0; i < this.games.length; i++) {
		// 			if (id == "*" || this.games[i].title.match(".*"+id+".*")) {
		// 				shown.push(this.games[i]);
		// 			}
		// 		}
		// 		this.$set("shown", shown);
		// 	}
		// },

		data: function () {
			return {
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
			}
		},

		mounted: function () {
			for (var i =0; i < 10; i++) {
				var n = "game "+i;
				this.games.push({
					title: "game "+i,
					level: i < 5 ? "NORMAL":"HARD",
					categories: ["Data Type"],
					url: i,
					thumbnail: "https://storage.googleapis.com/bytehunter_images/flood-fill.jpg"
				});
				// if (this.name == "*" || n.match(".*"+this.name+".*")) {
				// 	this.shown.push(this.games[i]);
				// }
			}
		}
	};
</script>
