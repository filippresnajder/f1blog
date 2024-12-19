import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamView from '@/views/TeamView.vue'
import CalendarView from '@/views/CalendarView.vue'
import DriversView from '@/views/DriversView.vue'
import DriverView from '@/views/DriverView.vue'
import TrackView from '@/views/TrackView.vue'
import ArticleView from '@/views/ArticleView.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'Home' },
      component: HomeView,
    },
    {
      path: '/drivers',
      name: 'drivers',
      meta: { title: 'Drivers' },
      component: DriversView,
    },
    {
      path: '/drivers/:slug',
      name: 'driver',
      meta: { title: 'Drivers' },
      component: DriverView,
      props: true
    },
    {
      path: '/teams',
      name: 'teams',
      meta: { title: 'Teams' },
      component: TeamView,
    },
    {
      path: '/calendar',
      name: 'calendar',
      meta: { title: 'Calendar' },
      component: CalendarView,
    },
    {
      path: '/calendar/:slug',
      name: 'track',
      meta: { title: 'Calendar' },
      component: TrackView,
      props: true
    },
    {
      path: '/articles/:slug',
      name: 'article',
      meta: { title: 'Article' },
      component: ArticleView,
      props: true
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      meta: { title: 'Not Found' },
      component: NotFound
    }
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },*/
  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router
