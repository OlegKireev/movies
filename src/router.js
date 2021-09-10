import VueRouter from 'vue-router';

import Homepage from './pages/Home';
import Aboutpage from './pages/About';
import Moviespage from './pages/Movies';
import NotFoundPage from './pages/NotFound';

const routes = [
  {
    path: '/',
    component: Homepage,
  },
  {
    path: '/about',
    component: Aboutpage,
  },
  {
    path: '/movies',
    component: Moviespage,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];

export const router = new VueRouter({
  mode: 'history',
  routes,
});
