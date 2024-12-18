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
      component: HomeView,
    },
    {
      path: '/drivers',
      name: 'drivers',
      component: DriversView,
    },
    {
      path: '/drivers/:slug',
      name: 'driver',
      component: DriverView,
      props: true
    },
    {
      path: '/teams',
      name: 'teams',
      component: TeamView,
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView,
    },
    {
      path: '/calendar/:slug',
      name: 'track',
      component: TrackView,
      props: true
    },
    {
      path: '/articles/:slug',
      name: 'article',
      component: ArticleView,
      props: true
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
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

export default router
