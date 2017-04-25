// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue 			from 'vue'
import App 			from './App'
import Game 		from './components/Game'
import Home 		from './components/Home'
import Ranking		from './components/ranking/Rank'
import NormalRank	from './components/ranking/NormalRank'
import HardRank	from './components/ranking/HardRank'
import InsaneRank from './components/ranking/InsaneRank'
import GameList		from './components/GameList'
import UserProfile	from './components/user/UserProfile'
import UserSettings from './components/user/UserSettings'

import NotFound from "./components/NotFound"
// import mainCSS		from './CSS/bytes-hunter.css'

import VueRouter 	from 'vue-router'
import VueResource 	from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
	mode: "history",
	routes: [
		{ path: '/', component: Home},
		{ path: '/home', component: Home},
		{ path: '/ranking', component: Ranking,
		children: [
					{ path: '', component: NormalRank},
					{ path: 'normal', component: NormalRank},
					{ path: 'hard', component: HardRank},
					{ path: 'insame', component: InsaneRank}
				]},
		{ path: '/game-list/:name', name: "game-list", component: GameList, props: true},
		{ path: '/user-profile', component: UserProfile},
		{ path: '/user-settings', component: UserSettings},
		{ path: '/game/:id', name: "game", component: Game, props: true},
		{ path: '*', component: NotFound}
	],
	mode: 'history'
})

var bus = new Vue({});

/* eslint-disable no-new */
const app = new Vue({
	router,
	data: {
		bus: bus,
		online: false,
		user: null
	},
	render: h => h(App)
}).$mount('#app');
window.onSignIn = function(gu) {
	console.log(gu);
	app.bus.$emit("signin", gu);
};
