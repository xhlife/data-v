<template>
  <div class="bar-chart" ref="chartDom">
    echart
  </div>
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
      title: {
        left: 'center',
        text: '各设备用水情况',
        textStyle: {
          fontSize: 18,
          color: '#fff'
        }
      },
      color: ['rgba(4, 49, 128, 0.6)'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: ['设备1', '设备2', '设备3', '设备4', '设备-CKLKSJKJSK', '设备-手机打开', '设备9080']
      },
      yAxis: {
        type: 'value',
        show: false
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    }
    options && this.eInstance.setOption(options)
  }
}
</script>

<style lang="less" scoped>
.bar-chart {
  width: 100%;
  height: 100%;
  // background-color: yellowgreen;
}
</style>
