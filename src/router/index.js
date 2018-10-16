import Vue from 'vue'
import VueRouter from 'vue-router'
import homeindex from '@/components/page/HomeIndex'
import aboutus from '@/components/page/AboutUs'
import setstate from '@/components/page/SetStating'
import fontend from '@/components/page/FontEnd'
import changPage from '@/components/page/changPage/changPage'
import router from '@/common/data/data'
import Login from '@/components/Login/Login'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/homeindex',
      component: homeindex,
      name: 'homeindex',
      children: [
        {
          path: 'changpage',
          component: changPage,
        }
      ]
    },
    {
      path: '/aboutus',
      component: aboutus,
      name: 'aboutus',
      class: 'fa-table',
      meta: {
        //meta元素
        requireAuth: true,
      },
    },
    {
      path: '/setstate',
      component: setstate,
      name: 'setstate',
      class: 'fa-newspaper-o'
    },
    {
      path: '/fontend',
      component: fontend,
      name: 'fontend',
      class: 'fa-newspaper-o'
    },
  ]
})
