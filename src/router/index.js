// router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import MapComponent from '@/components/MapComponent.vue';
import MapComponent2 from '@/components/MapComponent2.vue';
import MapComponent3 from '@/components/MapComponent3.vue';
import CardComponent from '@/components/CardComponent.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/map',
    name: 'Map',
    component: MapComponent,
  },
  {
    path: '/map2',
    name: 'Map2',
    component: MapComponent2,
  },
  {
    path: '/map3',
    name: 'Map3',
    component: MapComponent3,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history', // Use history mode for clean URLs (optional)
});

export default router;
