<template>
  <div class="pie-chart">
    <div class="chart-dom" ref="chartDom"></div>
    <div class="chart-filter">
      <select @change="handleSelectChange">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
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
            borderRadius: 6
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
  },
  methods: {
    handleSelectChange(e) {
      if (e.target.value === 'option2') {
        const data = [
          { value: 22, name: 'hhh' },
          { value: 38, name: 'rkkk' },
          { value: 45, name: 'objs' },
          { value: 27, name: 'asdgd' },
          { value: 32, name: 'sgnsk' },
          { value: 21, name: '8887' },
          { value: 17, name: 'skgjk3' },
          { value: 18, name: 's8dj' }
        ]
        this.eInstance.setOption({
          series: [{ data }]
        })
        return
      }
      if (e.target.value === 'option3') {
        const data = [
          { value: 22, name: 'rose 9' },
          { value: 23, name: 'rose 10' },
          { value: 24, name: 'rose 11' },
          { value: 27, name: 'rose 12' },
          { value: 16, name: 'rose 13' },
          { value: 43, name: 'rose 14' },
          { value: 34, name: 'rose 15' },
          { value: 18, name: 'rose 16' }
        ]
        this.eInstance.setOption({
          series: [{ data }]
        })
        return
      }
      this.eInstance.setOption({
        series: [
          {
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
      })
      console.log(e.target.value)
    }
  }
}
</script>

<style lang="less" scoped>
.pie-chart {
  width: 100%;
  height: 100%;
  // background-color: yellowgreen;
  position: relative;
  .chart-dom {
    width: 100%;
    height: 100%;
  }
  .chart-filter {
    position: absolute;
    top: 70px;
    right: 70px;
    z-index: 99;
  }
}
</style>
