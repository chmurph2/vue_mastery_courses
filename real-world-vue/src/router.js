import Vue from 'vue'
import Router from 'vue-router'
import EventList from './views/EventList.vue'
import EventShow from './views/EventShow.vue'
import EventCreate from './views/EventCreate.vue'
import FileNotFound from './views/FileNotFound.vue'

Vue.use(Router)

/*
We place components in both the /components and /views folders. The
difference is that when using Vue Router, it’s a best practice to put the
components (AKA pages) that get loaded by Vue Router in the /views directory.
You then keep the modular (reusable) components in your /components directory.
*/
export default new Router({
  // use the browser history.pushState API to change the URL without reloading the page
  // to support this in production: https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true
    },
    {
      path: '*',
      component: FileNotFound // support 404s in history mode
    }
  ]
})
