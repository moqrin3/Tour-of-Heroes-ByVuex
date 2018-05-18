import Vue from 'vue'
import Router from 'vue-router'
import HeroesComponent from '@/components/HeroesComponent'
import DashBoard from '@/components/DashBoard'
import Heroes from '@/components/Heroes'
import HeroDetail from '@/components/HeroDetail'
import AppComponent from '@/components/AppComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashBoard',
      component: DashBoard
    },
    {
      path: '',
      redirect: {name: 'dashBoard'}
    },
    {
      path: '/heroes',
      name: 'Heroes',
      component: HeroesComponent
    },
    {
      path: '/detail/:id',
      name: 'heroDetail',
      component: HeroDetail, props: true
    },
    // {
    //   path: '/',
    //   name: 'AppComponent',
    //   component: AppComponent
    // },
    // {
    //   path: '/heroes',
    //   name: 'Heroes',
    //   component: AppComponent
    // },
  ]
})
