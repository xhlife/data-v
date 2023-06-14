<template>
  <div class="bottom-table-2">
    <!-- <div class="title">水压预警设备</div> -->
    <dv-decoration-7 style="width:100%;height:40px;">
      <span style="padding:0 15px">水压预警设备</span>
    </dv-decoration-7>
    <div class="table">
      <dv-scroll-board :config="config" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        header: ['装置名', '设备位号', '水压'],
        index: true,
        align: ['center'],
        headerBGC: '#124086',
        columnWidth: [50, 110, 120, 110],
        data: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3']
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.bottom-table-2 {
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
