// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueI18n from 'vue-i18n'
import VueClipboard from 'vue-clipboard2'
import axios from 'axios';
import { HappyScroll } from 'vue-happy-scroll'
import 'vue-happy-scroll/docs/happy-scroll.css'

Vue.component('happy-scroll', HappyScroll)

Vue.prototype.$axios = axios;
Vue.use(VueClipboard)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./common/lang/zh-CN.js'), // 中文语言包
    /* 装逼语言包 */
    'en-US': require('./common/lang/en-US.js'), // 英文语言包
    'ja-JP': require('./common/lang/ja-JP.js')  // 日语语言包
  }
})

/* 全局组件 */
// import header from "@/components/portion/header"
// Vue.component('header', header)

Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
