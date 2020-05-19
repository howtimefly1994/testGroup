import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/proGitbook',
          name: 'proGitbook',
          component: () => import('../views/gitbook/proGitbook'),
        },
        {
          path: '/project',
          name: 'study',
          component: () => import('../views/gitbook/study'),
        },
        {
          path: '/tool1',
          name: 'tool1',
          component: () => import('../views/testTool/tool1'),
        },
        {
          path: '/tool2',
          name: 'tool2',
          component: () => import('../views/testTool/tool2'),
        },
        {
          path: '/SoftwareGitbook',
          name: 'SoftwareGitbook',
          component: () => import('../views/gitbook/SoftwareGitbook'),
        }
      ]
    }
  ]
})
