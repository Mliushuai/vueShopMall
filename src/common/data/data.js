import homeindex from '@/components/page/HomeIndex'
import aboutus from '@/components/page/AboutUs'
import setstate from '@/components/page/SetStating'
let routes = [
  {
    path: '/homeindex',
    component: homeindex,
    children: [
      {path: '/homeindex', component: homeindex, name: 'homeindex', class: 'fa-line-chart'},
      {path: '/aboutus', component: aboutus, name: 'aboutus', class: 'fa-table'},
      {path: '/setstate', component: setstate, name: 'setstate', class: 'fa-newspaper-o'},
    ]
  }
];
export default routes
