import Vue from 'vue'
import App from './App.vue'

import './assets/common.less'

// import dataV from '@jiaminghi/data-view'

import { fullScreenContainer, borderBox6, borderBox3, decoration2 } from '@jiaminghi/data-view'

Vue.config.productionTip = false

Vue.use(fullScreenContainer).use(borderBox6).use(borderBox3).use(decoration2)

new Vue({
  render: h => h(App)
}).$mount('#app')
