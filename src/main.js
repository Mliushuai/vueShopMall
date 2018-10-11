/**
 * vue 配置
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import '@/common/style/element-variables.scss'

Vue.prototype.$axios = axios;
Vue.use(Vuex);
Vue.use(router);
Vue.use(ElementUI, {locale});
Vue.config.productionTip = false;
//引入mock
require('./mock');
let store = new Vuex.Store({
  state: {
    totalPrice: 0
  },
  //获取状态机中数据
  //getter 在通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中的
  getters: {
    getTotal: state => {
      return state.totalPrice
    }
  },
  //mutations 只能进行同步触发时间
  mutations: {
    increment(state, price) {
      state.totalPrice += price
    },
    decrement(state, price) {
      state.totalPrice -= price
    }
  },
  //action 只能调用 mutations
  //action 中可以进行异步操作
  //action 作为指令参数
  // action接收的是与store实例 具有相同属性和方法的context对象
  actions: {
    increase(context, price) {
      //context 相当于 vuex中的store
      context.commit('increment', price)
    },
    // increases(context,id){
    //   api(id,function (price) {
    //     context.commit('increment',price)
    //   })
    // }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: {App},
  template: '<App/>'
})
