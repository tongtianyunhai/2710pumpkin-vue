import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/login/login.vue";
import Main from "@/views/main/index.vue"
import ShoppingInfo from '../views/shopping/shoppingInfo/index.vue'
import MerchandisePage from '../views/shopping/merchandisePage/index.vue'
import ShoppingCart from '../views/shopping/shoppingCart/index.vue'
import Order from '../views/order/index.vue'
import CustomerOrder from '../views/customer/customerOrder/index.vue'
import Mdetail from '../views/merchandise/mdetail/index.vue'
import Brand from '../views/merchandise/brand/index.vue'
import Manager from '../views/manager/index.vue'
import CustomerInfo from '../views/customer/customerInfo/index.vue'
import Rank from '../views/rank/index.vue'
import Show from '../views/show/index.vue'
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
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children: [
  //meichandise gly
      {
        path: '/show',
        name: 'Show',
        component: Show,
      },
  {
    path: '/mdetail',
    name: 'Mdetail',
    component: Mdetail
  },
    {
      path: '/brand',
      name: 'Brand',
      component: Brand
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
    },
      {
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
    },
      {
      path: '/shoppingInfo',
      name: 'ShoppingInfo',
      component: ShoppingInfo
    },
    {
      path: '/merchandisePage',
      name: 'MerchandisePage',
      component: MerchandisePage
    },
    {
      path: '/shoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
  ]
  }
]
const router = new VueRouter({
  routes
})
// router.beforeEach((to, from, next)=>{
// if(localStorage.getItem('token')){
//   if(to.path==='/'){
//     next({path:'/show'})
//   }else{
//    next({path: to.path ||'/show'})
//   }
// }else{
//   if(to.path==='/'){
//     next()
//   }else{
//     next('redirect=${to.path}')
//   }
// }
// })

export default router

