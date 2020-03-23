import Vue from 'vue';
import VueRouter from 'vue-router';
import EventList from '../views/EventList.vue';
import EventShow from '../views/EventShow.vue';
import EventCreate from '../views/EventCreate.vue';
import User from '../views/User.vue';
import NotFoundComponent from '../views/NotFoundComponent.vue';

Vue.use(VueRouter);

const routes = [
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
    path: '/user/:username',
    // ':' defines a dynamic value for this view
    // type .../user/<whatever-name> to see it in action

    name: 'user',
    component: User,
    props: true
  },
  {
    path: '*',
    component: NotFoundComponent
  }
];

const router = new VueRouter({
  //avoid '#' in the urls (see html history mode)
  //unsuported by IE<10
  mode: 'history',
  routes
});

export default router;
