import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import todos from '@/components/todos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/todos',
      name: 'todos',
      component: todos
    }
  ]
})
