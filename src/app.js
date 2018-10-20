import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

import Index from "./components/index.vue"
import Hoge from "./components/hoge.vue"
import NotFound from "./components/notfound.vue";

const routes = [
	{ path: "/", component: Index },
	{ path: "/hoge", component: Hoge },
	{ path: "*", component: NotFound }
];

const router = new VueRouter({
	mode: "history",
	routes
});

const app = new Vue({
	router
}).$mount("#app")
window.router = app.$router