<template>
  <div class="bottom-table-1">
    <!-- <div class="title">结垢腐蚀风险预警设备</div> -->
    <dv-decoration-7 style="width:100%;height:40px;">
      <span style="padding:0 15px">结垢腐蚀风险预警设备</span>
    </dv-decoration-7>
    <div class="table">
      <dv-scroll-board :config="config" />
    </div>
  </div>
</template>

<script>
import { ajaxGet } from '../../lib/_ajax'
export default {
  data() {
    return {
      config: {
        header: ['装置名', '设备名称', '雷诺数'],
        index: true,
        align: ['center'],
        headerBGC: '#124086',
        columnWidth: [50, 110, 120, 110],
        data: [
          // ['Xc', '123', 8000],
          // ['Xb', '124', 3400],
          // ['XN', '125', 5030],
          // ['XL', '126', 7921],
          // ['VKv', '127', 3232],
          // ['kks', '128', 4562],
          // ['ksid', '129', 7626],
          // ['iosj', '130', 6726],
          // ['iaojs', '131', 2932],
          // ['diso', '132', 7782]
        ]
      }
    }
  },
  mounted() {
    /*
       ['<span style="color:#37a2da;">行1列1</span>', '行1列2', '行1列3'],
    ['行2列1', '<span style="color:#32c5e9;">行2列2</span>', '行2列3'],
    ['行3列1', '行3列2', '<span style="color:#67e0e3;">行3列3</span>'],
    ['行4列1', '<span style="color:#9fe6b8;">行4列2</span>', '行4列3'],
    ['<span style="color:#ffdb5c;">行5列1</span>', '行5列2', '行5列3'],
    ['行6列1', '<span style="color:#ff9f7f;">行6列2</span>', '行6列3'],
    ['行7列1', '行7列2', '<span style="color:#fb7293;">行7列3</span>'],
    ['行8列1', '<span style="color:#e062ae;">行8列2</span>', '行8列3'],
    ['<span style="color:#e690d1;">行9列1</span>', '行9列2', '行9列3'],
    ['行10列1', '<span style="color:#e7bcf3;">行10列2</span>', '行10列3']
    */
    /*
    雷诺数低于6000的设备信息
    其中雷诺数在4000以下的需将该雷诺数标红，雷诺数在4000到6000的将该雷诺数标黄，
  */
    this.getData()
  },
  methods: {
    getData() {
      ajaxGet('/view/device/GetHeatLt6000').then(res => {
        // console.log(res)
        this.formatData(res.data)
      })
    },
    formatData(data) {
      const tmp = [...data.warning, ...data.error]
      const mapTmp = tmp.map(item => [item.Equipment, item.name, item.TubeRe])
      const d = mapTmp.map(item => {
        if (item[2] > 6000) {
          item[2] = `<span style="color:#9fe6b8;">${item[2]}</span>`
        } else if (item[2] > 4000) {
          item[2] = `<span style="color:#ffdb5c;">${item[2]}</span>`
        } else {
          item[2] = `<span style="color:#f56c6c;">${item[2]}</span>`
        }
        return item
      })
      this.config = {
        ...this.config,
        data: d
      }
    }
  }
}
</script>

<style lang="less" scoped>
.bottom-table-1 {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  padding-top: 10px;
  // color: #124086;
  .title {
    font-size: 18px;
    line-height: 40px;
    text-align: center;
  }
  .table {
    width: 100%;
    height: 80%;
  }
}
</style>
