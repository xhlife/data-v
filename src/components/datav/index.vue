<template>
  <div id="data-view">
    <dv-full-screen-container>
      <header id="header-container">
        <div class="header-info header-info-l">数据来源：技术规范 &amp; 工厂实地</div>
        <h3 class="header-title">循环冷却水系统概况</h3>
        <div class="header-info header-info-r">数据日期：<span id="nowDate">{{ year }}年{{ month }}月{{ day }}日</span></div>
      </header>
      <main class="main-container">
        <dv-border-box-7 class="content-box">
          <div class="left-box">
            <div class="left-box-top">
              <div class="left-box-top-left">
                <dv-border-box-3>
                  <LeftChart1 />
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
                    <BottomTable1Vue />
                  </dv-border-box-13>
                </div>
                <div class="scroll-table-item item-center">
                  <dv-border-box-13>
                    <BottomTable2Vue />
                  </dv-border-box-13>
                </div>
                <div class="scroll-table-item item-right">
                  <dv-border-box-13>
                    <BottomTable3Vue />
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
export default {
  name: 'DataView',
  components: {
    LeftChart1,
    CenterCmp,
    TopRightBarChartVue,
    BottomRightPieChartVue,
    BottomTable1Vue,
    BottomTable2Vue,
    BottomTable3Vue
  },
  data() {
    return {
      year: '',
      month: '',
      day: ''
    }
  },
  mounted() {
    const d = new Date()
    this.year = d.getFullYear()
    this.month = d.getMonth() + 1
    this.day = d.getDay()
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
    background-image: url('./img/bg.png');
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
    background: url('./img/header.png') no-repeat center center;
    // margin-bottom: 16px;
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
</style>
