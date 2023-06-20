<template>
  <div class="bar-chart">
    <div class="chart-dom" ref="chartDom"></div>
    <div class="chart-filter">
      <select @change="handleSelectChange">
        <!-- <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option> -->
        <option :value="item" v-for="item in selectionOptions" :key="item">{{ item }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import echarts, { dfColors } from '../../lib/echart'
import { ajaxGet } from '../../lib/_ajax'
// import SelectFilterVue from '../SelectFilter.vue'
export default {
  components: {
    // SelectFilterVue
  },
  data() {
    return {
      eInstance: null,
      colors: dfColors,
      seriesData: [120, 200, 150, 80, 70, 110, 130],
      xAxisData: ['设备1', '设备2', '设备3', '设备4', '设备-CKLKSJKJSK', '设备-手机打开', '设备9080'],
      options: {
        grid: {
          top: 90
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          type: 'category',
          data: [],
          // show: false,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false // 不显示坐标轴线
          },
          axisLabel: { interval: 0, rotate: 30 }
        },
        yAxis: {
          type: 'value',
          show: false
        },
        series: [
          {
            name: '单位: t/h',
            data: [],
            type: 'bar'
          }
        ]
      },
      selectionOptions: []
    }
  },
  mounted() {
    this.getSelectOptions()
    this.eInstance = echarts.init(this.$refs.chartDom)
  },
  methods: {
    getSelectOptions() {
      ajaxGet('/view/device/GetAllEquipmentName').then(res => {
        this.selectionOptions = res.data
        this.getData(this.selectionOptions[0])
      })
    },
    updateChart() {
      const len = this.colors.length
      this.seriesData = this.seriesData.map((v, i) => {
        const color = this.colors[i % len]
        return {
          value: v,
          name: this.xAxisData[i],
          itemStyle: {
            color
          }
        }
      })
      this.options.xAxis.data = this.xAxisData
      this.options.series[0].data = this.seriesData
      this.eInstance.setOption(this.options)
    },
    getData(type) {
      ajaxGet('/view/device/GetEquipmentTubeFlux?equipment=' + type).then(res => {
        this.xAxisData = res.data.map(item => item.name)
        this.seriesData = res.data.map(item => item.TubeFlux)
        this.updateChart()
      })
    },
    handleSelectChange(e) {
      this.getData(e.target.value)
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
    top: 48px;
    right: 50px;
    z-index: 99;
  }
}
</style>
