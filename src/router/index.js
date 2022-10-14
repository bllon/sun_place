import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Resume from '@/components/Tools/Resume/Resume'
import EditArticle from '@/components/Article/EditArticle'
import Article from '@/components/Article/Article'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    {
      path: '/article/edit',
      name: 'EditArticle',
      component: EditArticle
    },
    {
      path: '/article/:article_id',
      name: 'Article',
      component: Article
    },
  ]
})
