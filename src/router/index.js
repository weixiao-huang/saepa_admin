import Vue from 'vue';
import Router from 'vue-router';
import Admin from '@/pages/Admin/index';

import News from '@/pages/Admin/News/index';
import NewsList from '@/pages/Admin/News/List';

import Content from '@/pages/Admin/Content/index';
import Home from '@/pages/Admin/Content/Home';
import Projects from '@/pages/Admin/Content/Projects';
import AboutUs from '@/pages/Admin/Content/AboutUs';

import Login from '@/pages/Login';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: __dirname,
  scrollBehavior: (to) => {
    if (to.hash) return { selector: to.hash };
    return { x: 0, y: 0 };
  },
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/admin',
      component: Admin,
      children: [
        { path: '/', redirect: 'news' },
        {
          path: 'news',
          component: News,
          children: [
            { path: '/', redirect: 'list' },
            { path: 'list', component: NewsList },
          ],
        },
        {
          path: 'content',
          component: Content,
          children: [
            { path: '/', redirect: 'home' },
            { path: 'home', component: Home },
            { path: 'projects', component: Projects },
            { path: 'aboutus', component: AboutUs },
          ],
        },
      ],
    },
  ],
});

export default router;
