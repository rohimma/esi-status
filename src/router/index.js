import Vue from 'vue'
import Router from 'vue-router'
import EsiStatusPage from '@/components/EsiStatusPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'esi-status',
      component: EsiStatusPage
    }
  ]
})
