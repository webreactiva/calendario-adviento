import Vue from "vue"
import App from "./App.vue"
import VModal from "vue-js-modal"

require("./assets/sass/main.scss")

Vue.use(VModal, { dynamic: true, dialog: true })
Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount("#app")

require("./navbar.js")