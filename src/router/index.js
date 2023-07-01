import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Resume from '@/components/Resume/Resume'
import EditArticle from '@/components/Article/EditArticle'
import Article from '@/components/Article/Article'
import Error404 from '@/components/Error/Error404'
import Error500 from '@/components/Error/Error500'
import Profile from '@/components/User/Profile'
import Setting from '@/components/User/Setting'

//AI助手
import Assistant from '@/components/Assistant/Assistant'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // scrollBehavior () {
  //   return {
  //     x: 0,
  //     y: 0
  //   }
  // },
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },

    //文章路由
    {
      path: '/article/new',
      name: 'EditArticle',
      component: EditArticle
    },
    {
      path: '/article/:article_id/edit',
      name: 'EditArticle',
      component: EditArticle
    },
    {
      path: '/article/:article_id',
      name: 'Article',
      component: Article
    },
    {
      path: '/article/:article_id',
      name: 'Error404',
      component: Error404
    },
    {
      path: '/article/:article_id',
      name: 'Error500',
      component: Error500
    },

    //用户路由
    {
      path: '/user/:user_id',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/user/:user_id',
      name: 'Error404',
      component: Error404
    },
    {
      path: '/user/:user_id',
      name: 'Error500',
      component: Error500
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },

    //简历助手
    {
      path: '/resume',
      name: 'Resume',
      component: Resume,
    },

    //AI助手
    {
      path: '/assistant',
      name: 'Assistant',
      component: Assistant,
    },

    //404
    {
      path: '*',
      name: 'Error404',
      component: Error404
    },
    {
      path: '*',
      name: 'Error500',
      component: Error500
    },
  ]
})
