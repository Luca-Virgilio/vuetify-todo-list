import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Router from './router';

Vue.config.productionTip = false


new Vue({
  Router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
