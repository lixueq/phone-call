import Vue from 'vue'
import App from './App.vue'
import header from './header.vue'
import List from "./List.vue"


Vue.component(List.name,List)
Vue.component(header.name,header)
new Vue({
  el: '#app',
  render: h => h(App)
})
