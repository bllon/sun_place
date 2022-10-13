import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Resume from '@/components/Tools/Resume/Resume'
import EditPosts from '@/components/Posts/EditPosts'

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
      path: '/edit_posts',
      name: 'EditPosts',
      component: EditPosts
    },
  ]
})
