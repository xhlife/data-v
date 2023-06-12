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
  </div>
</template>

<script>
// import LabelTag from './LabelTag'

export default {
  name: 'CenterCmp',
  components: {
    // LabelTag
  },
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
      }
    }
  }
}
</script>

<style lang="less">
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
    // background-color: yellow;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .cc-main-container-item {
      // flex: 1;
      width: 22%;
      height: 80%;
      .container-item-content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .item-content-title {
          font-size: 24px;
          margin-bottom: 36px;
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
  }
}
</style>
