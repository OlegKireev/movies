import VueRouter from 'vue-router';

import Homepage from './pages/Home/Home';
import Aboutpage from './pages/About/About';
import Moviespage from './pages/Movies/Movies';
import NotFoundPage from './pages/NotFound/NotFound';

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
