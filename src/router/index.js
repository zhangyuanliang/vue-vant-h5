import Vue from 'vue'
import Router from 'vue-router'
import TestVueX from '@/views/test/TestVueX'
import Login from '@/views/login/Login'
import Home from '@/views/home/Home'
import StartExam from '@/views/exam/StartExam'
import InExam from '@/views/exam/InExam'

Vue.use(Router)

export default new Router({
  routes: [
    /* {
      path: '/',
      name: 'TestVueX',
      component: TestVueX
    }, */
    /* {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '',
      redirect: '/home'
    }, */
    {
      path: '/home',
      component: Home
    },
    {
      path: '/',
      component: StartExam
    },
    {
      path:'/inExam',
      component: InExam
    }
    
  ]
})
