<template>
  <div class="pie-chart" ref="chartDom"></div>
</template>

<script>
import echarts from '../../lib/echart'
export default {
  data() {
    return {
      eInstance: null
    }
  },
  mounted() {
    // console.log(this.$refs.chartDom)
    this.eInstance = echarts.init(this.$refs.chartDom)
    const options = {
      // title: {
      //   left: 'center',
      //   text: '装置设备占比',
      //   textStyle: {
      //     fontSize: 18,
      //     color: '#fff'
      //   }
      // },
      legend: {
        top: 'bottom'
      },
      // toolbox: {
      //   show: true,
      //   feature: {
      //     mark: { show: true },
      //     dataView: { show: true, readOnly: false },
      //     restore: { show: true },
      //     saveAsImage: { show: true }
      //   }
      // },
      series: [
        {
          name: 'Nightingale Chart',
          type: 'pie',
          radius: [30, 120],
          center: ['50%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 8
          },
          data: [
            { value: 40, name: 'rose 1' },
            { value: 38, name: 'rose 2' },
            { value: 32, name: 'rose 3' },
            { value: 30, name: 'rose 4' },
            { value: 28, name: 'rose 5' },
            { value: 26, name: 'rose 6' },
            { value: 22, name: 'rose 7' },
            { value: 18, name: 'rose 8' }
          ]
        }
      ]
    }
    this.eInstance.setOption(options)
  }
}
</script>

<style lang="less" scoped>
.pie-chart {
  width: 100%;
  height: 100%;
  // background-color: yellowgreen;
}
</style>
