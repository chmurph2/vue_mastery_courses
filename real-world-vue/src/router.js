import Vue from 'vue'
import Router from 'vue-router'
import EventList from './views/EventList.vue'
import EventShow from './views/EventShow.vue'
import EventCreate from './views/EventCreate.vue'

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
      name: 'event-list',
      component: EventList
    },
    {
      path: '/event',
      name: 'event-show',
      component: EventShow
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    }
  ]
})
