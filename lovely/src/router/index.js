import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Quote from '@/components/Quote'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Quote',
      component: Quote
    },
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    }
  ]
})
