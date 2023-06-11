<template>
  <div class="left-chart-1">
    <div class="lc1-header">装置用水量排行</div>
    <div class="lc1-details">排行top20</div>
    <!-- <dv-capsule-chart class="lc1-chart" :config="config" /> -->
    <dv-scroll-ranking-board class="lc1-chart" :config="config" />
  </div>
</template>

<script>
export default {
  name: 'LeftChart1',
  data () {
    return {
      config: {
        data: [
          {
            name: '装置1',
            value: 120
          },
          {
            name: '装置2',
            value: 110
          },
          {
            name: '装置3',
            value: 107
          },
          {
            name: '装置4',
            value: 99
          },
          {
            name: '装置5',
            value: 98
          },
          {
            name: '装置6',
            value: 90
          },
          {
            name: '装置7',
            value: 88
          },
          {
            name: '装置7',
            value: 88
          },
          {
            name: '装置7',
            value: 88
          }
        ],
        colors: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        unit: 'L'
      }
    }
  }
}
</script>

<style lang="less">
.left-chart-1 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-grow: 0;
  flex-direction: column;

  .lc1-header {
    text-align: center;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin-bottom: 10px;
  }

  .lc1-details {
    height: 50px;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-indent: 20px;

    span {
      color: #096dd9;
      font-weight: bold;
      font-size: 35px;
      margin-left: 20px;
    }
  }

  .lc1-chart {
    flex: 1;
  }
}
</style>
