<template>
  <div class="bottom-table-3">
    <!-- <div class="title">运行优良设备</div> -->
    <dv-decoration-7 style="width:100%;height:40px;">
      <span style="padding:0 15px">运行优良设备</span>
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
        header: ['装置名', '设备位号'],
        index: true,
        align: ['center'],
        headerBGC: '#124086',
        columnWidth: [50, 100, 100],
        data: [
          // ['行1列1', '行1列2'],
          // ['行2列1', '行2列2'],
          // ['行3列1', '行3列2'],
          // ['行4列1', '行4列2'],
          // ['行5列1', '行5列2'],
          // ['行6列1', '行6列2'],
          // ['行7列1', '行7列2'],
          // ['行8列1', '行8列2'],
          // ['行9列1', '行9列2'],
          // ['行10列1', '行10列2']
        ]
      }
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      ajaxGet('/view/device/GetHeatGood').then(res => {
        // console.log(res)
        const d = res.data.map(item => [item.Equipment, item.name])
        this.config = {
          ...this.config,
          data: d
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.bottom-table-3 {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  padding-top: 10px;
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
