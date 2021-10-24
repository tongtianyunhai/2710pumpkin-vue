import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "@/views/login/login";
import Main from "@/views/main/index"
import Shopping from '../views/shopping/index.vue'
import Order from '../views/order/index.vue'
import Merchandise from '../views/merchandise/index.vue'
import Manager from '../views/manager/index.vue'
import CustomerInfo from '../views/customer/customerInfo/index.vue'
import CustomerOrder from '../views/customer/customerOrder/index.vue'

import Rank from '../views/rank/index.vue'

// imlport Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
  children: [
  //售后 gly
  {
    path: '/merchandise',
    name: 'Merchandise',
    component: Merchandise
  },
    {
      path: '/manager',
      name: 'Manager',
      component: Manager
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },  {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/customerInfo',
      name: 'CustomerInfo',
      component: CustomerInfo
    },
    {
      path: '/customerOrder',
      name: 'CustomerOrder',
      component: CustomerOrder
    },{
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },
  ]

  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})


export default router

