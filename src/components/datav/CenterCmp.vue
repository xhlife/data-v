<template>
  <div class="center-cmp">
    <div class="cc-header">
      <dv-decoration-1 style="width: 100px; height: 50px" />
      <!-- <div>当前实际耗水总量</div> -->
      <dv-decoration-1 style="width: 100px; height: 50px" />
    </div>

    <div class="cc-details">
      <div>当前实际耗水总量</div>
      <!-- <div class="card">2</div>
      <div class="card">1</div>
      <div class="card">3</div>
      <div class="card">7</div>
      <div class="card">7</div>
      <span>.</span>
      <div class="card">7</div>
      <div class="card">7</div> -->
      <div class="card" :class="{ point: item === '.' }" v-for="(item, idx) in totalWaterArr" :key="idx">
        {{ item }}
      </div>
      <div>t/h</div>
    </div>

    <div class="cc-main-container">
      <div class="cc-main-container-top">
        <div class="cc-main-container-item">
          <dv-border-box-8>
            <div class="container-item-content">
              <div class="item-content-title">额定水量</div>
              <div class="item-content-text">{{ extraWaterNum }}t/h</div>
            </div>
          </dv-border-box-8>
        </div>
        <div class="cc-main-container-item">
          <dv-border-box-8 :reverse="true">
            <div class="container-item-content">
              <div class="item-content-title">设备数</div>
              <div class="item-content-text">{{ pumpNum }}个</div>
            </div>
          </dv-border-box-8>
        </div>
        <div class="cc-main-container-item">
          <dv-border-box-8>
            <div class="container-item-content">
              <div class="item-content-title">换热器数</div>
              <div class="item-content-text">{{ heatNum }}个</div>
            </div>
          </dv-border-box-8>
        </div>
        <div class="cc-main-container-item">
          <dv-border-box-8 :reverse="true">
            <div class="container-item-content">
              <div class="item-content-title">风机数</div>
              <div class="item-content-text">{{ towerNum }}个</div>
            </div>
          </dv-border-box-8>
        </div>
      </div>
      <div class="cc-main-container-bottom">
        <dv-border-box-7>
          <div class="content">
            <div class="title">循环冷却水监测平台介绍</div>
            <div class="divide"></div>
            <div class="des">
              <div class="text" ref="textBox" @mouseover="handleMouseover" @mouseleave="handleMouseLeave">
                本系统是根据石化企业实际循环冷却水系统的拓扑结构、设备设计及操作参数、平台布置等信息而定制基于BS循环冷却水系统的模拟平台和智能化预警系统，集成考虑工艺物流热源热量、循环水流量、循环水进出口温度、压力以及结垢变化影响的关键水冷器、凉水塔、管路节点的预警监控，一站式监控当前过程信息，定时向DCS系统取数，为CS端软件计算提供实时数据支撑。并且将各种信息共享给相关人员，促进信息沟通和协作，提高工作效率和质量，通过对数据进行分析和挖掘，可以提供决策支持，帮助其制定更加科学、合理的决策，以便于工程人员对循环水数据进行观察、分析和决策，并实时监控各种业务指标、设备状态等信息，及时发现问题并采取措施。
              </div>
            </div>
          </div>
        </dv-border-box-7>
      </div>
    </div>
  </div>
</template>

<script>
import { ajaxGet } from '../../lib/_ajax'
export default {
  name: 'CenterCmp',
  components: {},
  data() {
    return {
      moveReqId: null,
      scaleX: 1,
      scaleY: 1,
      textBoxW: 0,
      textBoxY: 0,
      moveStep: 1,
      totalWater: '1000',
      heatNum: 0,
      pumpNum: 0,
      towerNum: 0,
      extraWaterNum: 35500
    }
  },
  computed: {
    totalWaterArr() {
      return this.totalWater.split('')
    }
  },
  mounted() {
    this.initBoxInfo()
    ajaxGet('/view/device/GetStatistics').then(res => {
      this.totalWater = res.data.flux
      this.heatNum = res.data.heat
      this.pumpNum = res.data.pump
      this.towerNum = res.data.tower
    })
    setTimeout(() => {
      this.startMove()
    }, 2000)
  },
  beforeDestroy() {
    // this.handleMouseLeave()
  },
  methods: {
    initBoxInfo() {
      const textBox = this.$refs.textBox
      const div = document.getElementById('dv-full-screen-container')
      const style = window.getComputedStyle(div)
      const transform = style.getPropertyValue('transform')
      const matrix = transform.match(/^matrix\((.+)\)$/)
      if (matrix) {
        const matrixValues = matrix[1].split(',')
        const scaleX = parseFloat(matrixValues[0])
        const scaleY = parseFloat(matrixValues[3])
        this.scaleX = scaleX
        this.scaleY = scaleY
        // this.textBoxW = textBox.clientWidth * this.scaleX
        // this.textBoxY = textBox.clientHeight * this.scaleY
        this.textBoxW = textBox.clientWidth
        this.textBoxY = textBox.clientHeight
      } else {
        this.textBoxW = textBox.clientWidth
        this.textBoxY = textBox.clientHeight
      }
      // console.log(this.textBoxW, this.textBoxY)
    },
    startMove() {
      const textBox = this.$refs.textBox
      this.moveStep += 0.5
      textBox.style.transform = `translateY(-${this.moveStep}px)`
      if (this.moveStep > this.textBoxY - 105) {
        textBox.style.transform = `translateY(-${this.moveStep}px)`
        setTimeout(() => {
          this.moveStep = 0
          this.moveReqId = requestAnimationFrame(this.startMove)
        }, 2000)
      } else {
        this.moveReqId = requestAnimationFrame(this.startMove)
      }
    },
    handleMouseover() {
      cancelAnimationFrame(this.moveReqId)
    },
    handleMouseLeave() {
      this.startMove()
    }
  }
}
</script>

<style lang="less" scoped>
.center-cmp {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;

  .cc-header {
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
  }

  .cc-details {
    height: 88px;
    display: flex;
    justify-content: center;
    font-size: 32px;
    align-items: center;
    .card {
      background-color: rgba(4, 49, 128, 0.6);
      color: #08e5ff;
      height: 60px;
      width: 60px;
      font-size: 45px;
      font-weight: bold;
      line-height: 70px;
      text-align: center;
      margin: 5px;
    }
    .card.point {
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: transparent;
      line-height: 0.9;
    }
  }

  .cc-main-container {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    // background-color: yellow;
    .cc-main-container-top {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      height: 40%;
    }
    .cc-main-container-item {
      // flex: 1;
      width: 22%;
      height: 100%;
      .container-item-content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .item-content-title {
          font-size: 24px;
          margin-bottom: 20px;
          color: #70a0c2;
        }
        .item-content-text {
          font-size: 36px;
          color: #65bbc5;
          text-shadow: 0 0 10px #333, 0 0 20px #333, 0 0 30px #333, 0 0 40px #006699, 0 0 70px #006699, 0 0 80px #006699,
            0 0 100px #006699, 0 0 150px #006699;
        }
      }
    }
    .cc-main-container-bottom {
      margin-top: 10px;
      width: 80%;
      height: 55%;
      cursor: pointer;
      .content {
        width: 100%;
        height: 100%;
        color: rgb(112, 221, 255);
        box-sizing: border-box;
        .title {
          text-align: center;
          font-size: 22px;
          margin: 5px 0;
        }
        .divide {
          width: 80%;
          height: 2px;
          background-color: rgb(124, 146, 201);
          box-sizing: border-box;
          margin: 0 auto;
          border-radius: 1px;
        }
        .des {
          width: 78%;
          height: 100%;
          margin: 0 auto;
          margin-top: 5px;
          overflow: hidden;
          max-height: 100px;
          line-height: 36px;
        }
      }
    }
    /deep/ .dv-border-box-7 {
      border: 1px solid rgb(35, 95, 167) !important;
    }
    /deep/ .dv-border-svg-container {
      polyline {
        stroke: rgb(35, 95, 167);
      }
    }
  }
}
</style>
