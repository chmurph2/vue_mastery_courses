import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router)

/*
We place components in both the /components and /views folders. The
difference is that when using Vue Router, it’s a best practice to put the
components (AKA pages) that get loaded by Vue Router in the /views directory.
You then keep the modular (reusable) components in your /components directory.
*/

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'about',
      component: About,
      alias: '/about'
    }
    // {
    //   path: 'about',
    //   redirect: { name: 'about'}
    // }
  ]
})
