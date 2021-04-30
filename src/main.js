//Import vue and name it Vue
import Vue from 'vue'
//Import vue-router and name it VueRouter
import VueRouter from 'vue-router'
//Import vue-resource and name it VueResource
import VueResource from 'vue-resource'

//Import App.vue and name it App
import App from './App.vue'
//Import routes.js and use the {} passing routes
import { routes } from './routes.js'
//Import store/store.js and name it store
import store from './store/store.js'

Vue.config.productionTip = false

//Initialize VueRouter using Vue.use()
Vue.use(VueRouter);
//Initialize VueResource using Vue.use()
Vue.use(VueResource);


//Set Equal to your Firebase Database URL
Vue.http.options.root = 'https://vuejs-stocktrader-aada1-default-rtdb.firebaseio.com/'

  Vue.filter('currency', (value) => {
    //Return value.toLocaleString(), Add '$' sign before value
    return $value.toLocaleString()
  })

const router = new VueRouter({
  //Set router mode to history
  mode: 'history',
  //Pass routes constant imported from above
  routes
})

new Vue({
  //Pass the router constant to vue application
  router,
  //Pass store constant to vue application
  store,
  render: h => h(App),
}).$mount('#app')
