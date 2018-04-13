import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Team from '@/components/Team'
import Ladder from '@/components/Ladder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ladder',
      name: 'Ladder',
      component: Ladder
    },
    {
      path: '/teams/:id',
      name: 'Teams',
      component: Team
    }
  ]
})
