import Vue from 'vue'
import App from './App.vue'
import store from "@/store";
Vue.config.productionTip = false

Vue.prototype.$store = store

new Vue({
    store,
    ...App
}).$mount()
