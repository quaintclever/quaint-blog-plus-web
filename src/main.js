import Vue from 'vue'
import App from './App.vue'
import Router from './router/index'
import store from './vuex/store' // 引入store
import MetaInfo from 'vue-meta-info' // 引入meta
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(MetaInfo);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router:Router,
  store,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('custom-render-trigger'))
  }
}).$mount('#app');
