<template>
  <div id="data-view">
    <dv-full-screen-container>
      <header id="header-container">
        <div class="header-info header-info-l">数据来源：技术规范 &amp; 工厂实地</div>
        <div class="header-info header-title">循环冷却水系统概况</div>
        <div class="header-info header-info-r">
          数据日期：
          <span id="nowDate"> {{ year }}年{{ month }}月{{ day }}日 {{ hour }}时{{ minute }}分{{ second }}秒 </span>
        </div>
      </header>
      <main class="main-container">
        <dv-border-box-7 class="content-box">
          <div class="left-box">
            <div class="left-box-top">
              <div class="left-box-top-left">
                <dv-border-box-3>
                  <LeftChart1 ref="leftChart">
                    <template #btn>
                      <img
                        @click.stop="handleDetail('leftChart')"
                        class="detail-btn"
                        src="../../assets/kno_detail_full screen.svg"
                        alt=""
                      />
                    </template>
                  </LeftChart1>
                </dv-border-box-3>
              </div>
              <div class="left-box-top-right">
                <dv-border-box-3 class="rmctc-left-container">
                  <Center-Cmp />
                </dv-border-box-3>
              </div>
            </div>
            <dv-decoration-2 style="height: 10px" />
            <div class="left-box-bottom">
              <div class="scroll-table">
                <div class="scroll-table-item item-left">
                  <dv-border-box-13>
                    <BottomTable1Vue ref="bottomTable1">
                      <template #btn>
                        <img
                          @click.stop="handleDetail('bottomTable1')"
                          class="detail-btn detail-table"
                          src="../../assets/kno_detail_full screen.svg"
                          alt=""
                        />
                      </template>
                    </BottomTable1Vue>
                  </dv-border-box-13>
                </div>
                <div class="scroll-table-item item-center">
                  <dv-border-box-13>
                    <BottomTable2Vue ref="bottomTable2">
                      <template #btn>
                        <img
                          @click.stop="handleDetail('bottomTable2')"
                          class="detail-btn detail-table"
                          src="../../assets/kno_detail_full screen.svg"
                          alt=""
                        />
                      </template>
                    </BottomTable2Vue>
                  </dv-border-box-13>
                </div>
                <div class="scroll-table-item item-right">
                  <dv-border-box-13>
                    <BottomTable3Vue ref="bottomTable3">
                      <template #btn>
                        <img
                          @click.stop="handleDetail('bottomTable3')"
                          class="detail-btn detail-table"
                          src="../../assets/kno_detail_full screen.svg"
                          alt=""
                        />
                      </template>
                    </BottomTable3Vue>
                  </dv-border-box-13>
                </div>
              </div>
            </div>
          </div>
          <div class="right-box">
            <div class="right-box-top">
              <dv-border-box-11 title="各设备用水情况">
                <TopRightBarChartVue />
              </dv-border-box-11>
            </div>
            <div class="right-box-bottom">
              <dv-border-box-11 title="装置设备占比">
                <BottomRightPieChartVue />
              </dv-border-box-11>
            </div>
          </div>
        </dv-border-box-7>
      </main>
    </dv-full-screen-container>

    <Popup :mask-close="true" :visible.sync="visiblePopup">
      <div class="popup-detail">
        <div class="close-popup" @click="visiblePopup = false">
          <img class="close-btn" src="../../assets/close.svg" alt="" />
        </div>
        <div class="left-chart-1" v-if="detailType === 'chart'">
          <div class="lc1-header">装置用水量排行</div>
          <div class="chart-dom" ref="chartDom" :style="{ height: detailHeight + 'px' }"></div>
        </div>
        <div class="bottom-table-1" v-else>
          <dv-decoration-7 style="width:100%;height:40px;">
            <span style="padding:0 15px">{{ activeDetailConfig.title }}</span>
          </dv-decoration-7>
          <div class="table" ref="popupTable" :style="{ height: detailHeight + 'px' }">
            <dv-scroll-board :config="activeDetailConfig" :style="{ height: detailHeight + 'px' }" />
          </div>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script>
import LeftChart1 from './LeftChart1'
import CenterCmp from './CenterCmp'
import TopRightBarChartVue from './TopRightBarChart.vue'
import BottomTable1Vue from './BottomTable1.vue'
import BottomTable2Vue from './BottomTable2.vue'
import BottomTable3Vue from './BottomTable3.vue'
import BottomRightPieChartVue from './BottomRightPieChart.vue'
import Popup from '../popup/index.vue'
import echarts from '@/lib/echart'
export default {
  name: 'DataView',
  components: {
    LeftChart1,
    CenterCmp,
    TopRightBarChartVue,
    BottomRightPieChartVue,
    BottomTable1Vue,
    BottomTable2Vue,
    BottomTable3Vue,
    Popup
  },
  data() {
    return {
      year: '',
      month: '',
      day: '',
      hour: '',
      minute: '',
      second: '',
      visiblePopup: false,
      detailType: '', // chart、 table
      activeDetailConfig: {},
      detailHeight: 0
    }
  },
  mounted() {
    this.initDate()
  },
  methods: {
    initDate() {
      const d = new Date()
      this.year = d.getFullYear()
      const tmpMonth = d.getMonth() + 1
      this.month = tmpMonth > 9 ? tmpMonth : '0' + tmpMonth
      const tmpDay = d.getDate()
      this.day = tmpDay > 9 ? tmpDay : '0' + tmpDay

      const tmpHour = d.getHours()
      this.hour = tmpHour > 9 ? tmpHour : '0' + tmpHour

      const tmpMin = d.getMinutes()
      this.minute = tmpMin > 9 ? tmpMin : '0' + tmpMin

      const tmpSecond = d.getSeconds()

      this.second = tmpSecond > 9 ? tmpSecond : '0' + tmpSecond
    },
    handleDetail(refName) {
      this.visiblePopup = true
      this.activeDetailConfig = this.$refs[refName].getConfig()
      const t = 'Table'
      const c = 'chart'
      if (refName.includes(t)) {
        this.detailType = t
        this.detailHeight = (this.activeDetailConfig.data.length + 1) * 40
        this.activeDetailConfig.rowNum = this.activeDetailConfig.data.length
      } else {
        this.detailType = c
        this.detailHeight = this.activeDetailConfig.yAxis.data.length * 50
        this.$nextTick(() => {
          this.initPopupChart()
        })
      }
    },
    initPopupChart() {
      const chartIns = echarts.init(this.$refs.chartDom)
      chartIns.setOption(this.activeDetailConfig)
    },
    initPopupTable(refName) {
      // const $el = this.$refs[refName].$el
    }
  }
}
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url('../../assets/img/bg.png');
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
    padding: 0 5px;
    box-sizing: border-box;
  }
  #header-container {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    // background-color: red;
    z-index: 999;
    background: url('../../assets/img/header.png') no-repeat center center;
    // margin-bottom: 16px;
    .header-info {
      flex: 1;
      &:nth-child(2) {
        padding-left: 200px;
        font-size: 32px;
      }
      &:last-child {
        text-align: right;
      }
    }
  }
  .main-container {
    box-sizing: border-box;
    width: 100%;
    height: calc(100vh - 80px);
    padding-top: 16px;
  }
  .content-box {
    & > .border-box-content {
      display: flex;
      padding: 10px;
      box-sizing: border-box;
    }
    .left-box {
      width: 70%;
      .left-box-top {
        height: 60%;
        display: flex;
        .left-box-top-left {
          width: 28%;
          height: 100%;
          & > .dv-border-box-3 {
            padding: 32px;
            box-sizing: border-box;
          }
        }
        .left-box-top-right {
          width: 72%;
          margin-left: 10px;
          // background-color: #fff;
          & > .dv-border-box-3 {
            padding: 32px;
            box-sizing: border-box;
          }
        }
      }
      .left-box-bottom {
        height: 40%;
        .scroll-table {
          padding: 5px 5px 5px 0px;
          box-sizing: border-box;
          display: flex;
          height: 100%;
          .scroll-table-item {
            flex: 1.1;
            height: 100%;
            box-sizing: border-box;
            &:last-child {
              flex: 0.8;
            }
          }
        }
      }
    }
    .right-box {
      // background-color: #ccc;
      position: relative;
      width: 30%;
      .right-decorate {
        position: absolute;
        left: 0;
        width: 30px;
        height: 100%;
        // background-color: pink;
      }
      .right-box-top {
        height: 55%;
        // background-color: skyblue;
      }
      .right-box-bottom {
        height: 45%;
        // background-color: #fff;
      }
    }
  }
}
.detail-btn {
  width: 24px;
  height: 24px;
  position: absolute;
  right: 16px;
  cursor: pointer;
}
.detail-table {
  right: 32px;
}

.popup-detail {
  width: 60vw;
  height: 70vh;
  background-color: rgb(18, 64, 134);
  position: relative;
  overflow: auto;
  padding: 16px;
  .close-popup {
    position: absolute;
    right: 16px;
    top: 16px;
    cursor: pointer;
    .close-btn {
      width: 16px;
      height: 16px;
    }
  }
}

.left-chart-1 {
  width: 100%;
  height: 70vh;
  overflow: auto;
  .lc1-header {
    text-align: center;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
  }
  .chart-dom {
    width: 100%;
  }
}
</style>
