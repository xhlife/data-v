<template>
  <div class="pie-chart">
    <div class="chart-dom" ref="chartDom"></div>
    <!-- <div v-show="!showPie">暂无数据</div> -->
    <div class="chart-filter">
      <select @change="handleSelectChange">
        <option value="1">一循</option>
        <option value="2">二循</option>
        <option value="3">三循</option>
      </select>
    </div>
  </div>
</template>

<script>
import echarts from '../../lib/echart'
import { ajaxGet } from '../../lib/_ajax'
export default {
  data() {
    return {
      eInstance: null,
      dataUrl: '/view/device/GetProportion?level=',
      options: {
        legend: {
          left: 'center',
          bottom: '2%',
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            name: 'no data',
            type: 'pie',
            radius: [30, 120],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 6
            },
            label: {
              alignTo: 'edge',
              formatter: '{name|{b}}\n{time|{c} %}',
              minMargin: 5,
              edgeDistance: 35,
              lineHeight: 15,
              textStyle: {
                color: '#fff'
              },
              rich: {
                time: {
                  fontSize: 10,
                  color: '#fff'
                }
              }
            },
            labelLine: {
              length: 15,
              length2: 0,
              maxSurfaceAngle: 80
            },
            // labelLayout: function(params) {
            //   const isLeft = params.labelRect.x < this.eInstance.getWidth() / 2
            //   const points = params.labelLinePoints
            //   // Update the end point.
            //   points[2][0] = isLeft ? params.labelRect.x : params.labelRect.x + params.labelRect.width
            //   return {
            //     labelLinePoints: points
            //   }
            // },
            data: [
              // { value: 40, name: 'rose 1' },
              // { value: 38, name: 'rose 2' },
              // { value: 32, name: 'rose 3' },
              // { value: 30, name: 'rose 4' },
              // { value: 28, name: 'rose 5' },
              // { value: 26, name: 'rose 6' },
              // { value: 22, name: 'rose 7' },
              // { value: 18, name: 'rose 8' }
            ]
          }
        ]
      }
    }
  },
  mounted() {
    // console.log(this.$refs.chartDom)
    this.eInstance = echarts.init(this.$refs.chartDom)
    this.changeData('1')
  },
  methods: {
    changeData(type) {
      ajaxGet(this.dataUrl + type).then(res => {
        this.mapData = res.data
        const dataList = Object.entries(res.data)
        this.options.series[0].data = dataList.map(item => {
          return {
            value: item[1].split('%')[0],
            name: item[0]
          }
        })
        this.eInstance.setOption(this.options)
      })
    },
    handleSelectChange(e) {
      if (e.target.value === '2') {
        this.changeData('2')
        return
      }
      if (e.target.value === '3') {
        this.changeData('3')
        return
      }
      this.changeData('1')
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
    top: 48px;
    right: 50px;
    z-index: 99;
  }
}
</style>
