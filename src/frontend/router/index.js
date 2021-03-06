import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';

Vue.use(VueRouter);
Vue.use(Meta);

export default function () {
  return new VueRouter({
    mode: 'history',
    routes: [
      { path: '/admin', component: () => import('../pages/admin/Home.vue') },
      { path: '/admin/attendees', component: () => import('../pages/admin/attendees/list/Page.vue') },
      { path: '/admin/attendees/add', component: () => import('../pages/admin/attendees/add/Page.vue') },
      { path: '/admin/attendees/:id', name: 'admin.attendees.show', component: () => import('../pages/admin/attendees/show/Page.vue') },
      { path: '/admin/booth', component: () => import('../pages/admin/booth/list/Page.vue') },
      { path: '/admin/booth/add', component: () => import('../pages/admin/booth/add/Page.vue') },
      { path: '/admin/booth/:id', name: 'admin.booth.show', component: () => import('../pages/admin/booth/show/Page.vue') },
      { path: '/booth', component: () => import('../pages/booth/Page.vue') },
    ],
  });
}
