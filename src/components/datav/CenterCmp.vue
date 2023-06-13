<template>
  <div class="center-cmp">
    <div class="cc-header">
      <dv-decoration-1 style="width: 100px; height: 50px" />
      <!-- <div>当前实际耗水总量</div> -->
      <dv-decoration-1 style="width: 100px; height: 50px" />
    </div>

    <div class="cc-details">
      <div>当前实际耗水总量</div>
      <div class="card">2</div>
      <div class="card">1</div>
      <div class="card">3</div>
      <div class="card">7</div>
      <div>t/h</div>
    </div>

    <div class="cc-main-container">
      <div class="cc-main-container-top">
        <div class="cc-main-container-item">
          <dv-border-box-8>
            <div class="container-item-content">
              <div class="item-content-title">额定水量</div>
              <div class="item-content-text">100th</div>
            </div>
          </dv-border-box-8>
        </div>
        <div class="cc-main-container-item">
          <dv-border-box-8 :reverse="true">
            <div class="container-item-content">
              <div class="item-content-title">设备数</div>
              <div class="item-content-text">132个</div>
            </div>
          </dv-border-box-8>
        </div>
        <div class="cc-main-container-item">
          <dv-border-box-8>
            <div class="container-item-content">
              <div class="item-content-title">换热器数</div>
              <div class="item-content-text">37个</div>
            </div>
          </dv-border-box-8>
        </div>
        <div class="cc-main-container-item">
          <dv-border-box-8 :reverse="true">
            <div class="container-item-content">
              <div class="item-content-title">风机数</div>
              <div class="item-content-text">66个</div>
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
                北京时间2023年6月13日，2022-2023赛季NBA总决赛进行第五场争夺。
                最终，回到主场的丹佛掘金以94-89击败迈阿密热火，大比分4-1战胜对手，成功捧起NBA总冠军奖杯。
                值得一提的是，这是掘金队史上首个NBA总冠军奖杯。
                1976年NBA和ABA合并后，掘金只进入过3次分区决赛，其中两次都输给了洛杉矶湖人。本赛季，掘金战胜詹姆斯领衔的湖人，首次挺进总决赛的同时，也完成了复仇。
                掘金的对手迈阿密热火，队史上曾3次捧起总冠军奖杯。本赛季季后赛，热火一路战胜步行者、雄鹿、尼克斯、凯尔特人，成为历史上第六支完成黑八奇迹的球队，成功杀进总决赛。
                总决赛前四战，第一次来到总决赛舞台的掘金表现更胜一筹。掘金只在主场丢掉一分，大比分3-1领先热火，手握冠军点。
                回到主场的掘金不希望错过这样的天时地利人和，期待在G5就能结束战斗。
              </div>
            </div>
          </div>
        </dv-border-box-7>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CenterCmp',
  components: {},
  data() {
    return {
      config: {
        data: [
          {
            name: '收费站',
            value: 1315
          },
          {
            name: '监控中心',
            value: 415
          },
          {
            name: '道路外场',
            value: 90
          },
          {
            name: '其他',
            value: 317
          }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        lineWidth: 30,
        radius: '55%',
        activeRadius: '60%'
      },
      moveReqId: null,
      scaleX: 1,
      scaleY: 1,
      textBoxW: 0,
      textBoxY: 0,
      moveStep: 1
    }
  },
  mounted() {
    this.initBoxInfo()
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
        this.textBoxW = textBox.clientWidth * this.scaleX
        this.textBoxY = textBox.clientHeight * this.scaleY
      } else {
        this.textBoxW = textBox.clientWidth
        this.textBoxY = textBox.clientHeight
      }
      console.log(this.textBoxW, this.textBoxY)
    },
    startMove() {
      const textBox = this.$refs.textBox
      this.moveStep += 0.8
      textBox.style.transform = `translateY(-${this.moveStep}px)`
      if (this.moveStep > this.textBoxY - 90) {
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
      height: 70px;
      width: 70px;
      font-size: 45px;
      font-weight: bold;
      line-height: 70px;
      text-align: center;
      margin: 10px;
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
      width: 50%;
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
