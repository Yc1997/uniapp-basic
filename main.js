import Vue from 'vue'
import App from './App'
import config from "./static/js/conf/config";

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$config=config;

const app = new Vue({
    ...App
})
app.$mount()
