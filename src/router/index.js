import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import World from '../views/World.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'product',
      path: '/product/:id',
      component: Product
    },
    {
      name: 'world',
      path: '/world',
      component: World
    }
  ]
})

export default router
