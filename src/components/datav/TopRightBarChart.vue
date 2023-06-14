<template>
  <div class="bar-chart">
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
// import SelectFilterVue from '../SelectFilter.vue'
export default {
  components: {
    // SelectFilterVue
  },
  data() {
    return {
      eInstance: null,
      options: {}
    }
  },
  mounted() {
    // console.log(this.$refs.chartDom)
    this.eInstance = echarts.init(this.$refs.chartDom)
    this.options = {
      // title: {
      //   left: 'center',
      //   text: '各设备用水情况',
      //   textStyle: {
      //     fontSize: 18,
      //     color: '#fff'
      //   }
      // },
      color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
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
          name: '单位: t/h',
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    }
    this.eInstance.setOption(this.options)
  },
  methods: {
    handleSelectChange(e) {
      if (e.target.value === 'option2') {
        const data = [120, 90, 140, 50, 70, 190, 30]
        this.eInstance.setOption({
          series: [{ data }]
        })
        return
      }
      if (e.target.value === 'option3') {
        const data = [80, 30, 50, 200, 180, 110, 67]
        this.eInstance.setOption({
          series: [{ data }]
        })
        return
      }
      this.eInstance.setOption({
        series: [{ data: [120, 200, 150, 80, 70, 110, 130] }]
      })
      console.log(e.target.value)
    }
  }
}
</script>

<style lang="less" scoped>
.bar-chart {
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
