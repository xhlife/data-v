import Vue from 'vue'
import App from './App.vue'

import './assets/common.less'

// import dataV from '@jiaminghi/data-view'

import {
  fullScreenContainer,
  borderBox8,
  borderBox7,
  borderBox13,
  borderBox11,
  borderBox3,
  decoration1,
  decoration2,
  decoration7,
  decoration8,
  scrollRankingBoard,
  digitalFlop,
  scrollBoard
  // activeRingChart
} from '@jiaminghi/data-view'

Vue.config.productionTip = false

Vue.use(fullScreenContainer)
  .use(borderBox13)
  .use(borderBox11)
  .use(borderBox7)
  .use(borderBox3)
  .use(borderBox8)
  .use(decoration8)
  .use(decoration7)
  .use(decoration2)
  .use(decoration1)
  .use(scrollRankingBoard)
  .use(digitalFlop)
  .use(scrollBoard)
// .use(activeRingChart)

new Vue({
  render: h => h(App)
}).$mount('#app')
