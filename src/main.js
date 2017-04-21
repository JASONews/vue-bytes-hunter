// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue 			from 'vue'
import App 			from './App'
import Game 		from './components/Game'
import Home 		from './components/Home'
import Ranking		from './components/Ranking'
import GameList		from './components/GameList'
import UserProfile	from './components/UserProfile'
import UserSettings from './components/UserSettings'
import mainCSS		from './CSS/bytes-hunter.css'

import VueRouter 	from 'vue-router'
import VueResource 	from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{ path: '/', component: Home},
		{ path: '/home', component: Home},
		{ path: '/ranking', component: Ranking},
		{ path: '/game-list', component: GameList},
		{ path: '/user-profile', component: UserProfile},
		{ path: '/user-settings', component: UserSettings},
		{ path: '/game', component: Game},
		{ path: '*', redirect: '/home'}
	],
	mode: 'history'
})

var bus = new Vue({});

/* eslint-disable no-new */
const app = new Vue({
	router,
	data: {
		bus: bus
	},
	render: h => h(App)
}).$mount('#app')
