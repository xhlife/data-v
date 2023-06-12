<template>
  <div id="data-view">
    <dv-full-screen-container>
      <header id="header-container">
        <div class="header-info header-info-l">数据来源：技术规范 &amp; 工厂实地</div>
        <h3 class="header-title">循环冷却水系统概况</h3>
        <div class="header-info header-info-r">数据日期：<span id="nowDate">xx年xx月xx日xx时xx分xx秒</span></div>
      </header>
      <main class="main-container">
        <dv-border-box-6 class="content-box">
          <div class="left-box">
            <div class="left-box-top">
              <div class="left-box-top-left">
                <dv-border-box-3>
                  <LeftChart1 />
                </dv-border-box-3>
                <dv-decoration-2 style="height: 10px" />
              </div>
              <div class="left-box-top-right">
                <dv-border-box-3 class="rmctc-left-container">
                  <Center-Cmp />
                </dv-border-box-3>
              </div>
            </div>
            <div class="left-box-bottom">
              <div class="scroll-table">
                <div class="scroll-table-item item-left">left</div>
                <div class="scroll-table-item item-center">center</div>
                <div class="scroll-table-item item-right">right</div>
              </div>
            </div>
          </div>
          <div class="right-box">
            <div class="right-box-top">top</div>
            <div class="right-box-bottom">bottom</div>
          </div>
        </dv-border-box-6>
      </main>
    </dv-full-screen-container>
  </div>
</template>

<script>
import LeftChart1 from './LeftChart1'
// import LeftChart2 from './LeftChart2'
// import LeftChart3 from './LeftChart3'

import CenterCmp from './CenterCmp'

// import RightChart1 from './RightChart1'
// import RightChart2 from './RightChart2'

// import BottomCharts from './BottomCharts'
// import echarts from '../../lib/echart'
export default {
  name: 'DataView',
  components: {
    LeftChart1,
    // LeftChart2,
    // LeftChart3,
    CenterCmp
    // RightChart1,
    // RightChart2,
    // BottomCharts
  },
  data() {
    return {}
  },
  mounted() {}
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
        height: 30%;
        .scroll-table {
          display: flex;
          .scroll-table-item {
            flex: 1;
          }
        }
      }
    }
    .right-box {
      // background-color: #ccc;
      width: 30%;
      .right-box-top {
        height: 55%;
        background-color: skyblue;
      }
      .right-box-bottom {
        height: 45%;
        background-color: #fff;
      }
    }
  }
}
</style>
