<template>
  <div class="left-chart-1">
    <div class="lc1-header" style="position: relative;">
      装置用水量排行
      <slot name="btn"></slot>
    </div>
    <div class="chart-dom" ref="chartDom" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave"></div>
  </div>
</template>

<script>
import echarts, { dfColors } from '@/lib/echart'
// import { ajaxGet } from '../../lib/_ajax'
export default {
  name: 'LeftChart1',
  data() {
    return {
      aniInterval: null,
      yAxisData: [
        '装置1',
        '装置2',
        '装置3',
        '装置4',
        '装置5',
        '装置6',
        '装置7',
        '装置8',
        '装置9',
        '装置10',
        '装置11',
        '装置12',
        '装置13',
        '装置14',
        '装置15',
        '装置16',
        '装置17',
        '装置18',
        '装置19',
        '装置20'
      ],
      seriesData: [200, 188, 180, 175, 164, 157, 146, 134, 130, 123, 109, 96, 89, 80, 78, 70, 67, 64, 50, 44],
      chartIns: null,
      colors: dfColors,
      option: {
        grid: {
          top: 0,
          left: 60,
          bottom: 0,
          right: 57
        },
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          max: 'dataMax',
          show: false
        },
        yAxis: {
          axisTick: {
            show: false
          },
          axisLine: {
            show: false // 不显示坐标轴线
          },
          axisLabel: {
            show: true, // 显示刻度值标签
            color: '#fff' // 刻度值标签字体颜色
          },
          type: 'category',
          data: [],
          inverse: true,
          animationDuration: 300,
          animationDurationUpdate: 300,
          max: 8 // only the largest 3 bars will be displayed
        },
        series: [
          {
            // name: 'th',
            type: 'bar',
            data: [],
            label: {
              show: true,
              position: 'right',
              valueAnimation: true,
              color: '#fff'
            },
            barWidth: 16,
            itemStyle: {
              // 柱状图每个柱子的样式
              borderRadius: [0, 8, 8, 0] // 设置圆角大小为5像素
            }
          }
        ],
        animationDuration: 0,
        animationDurationUpdate: 800,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
      }
    }
  },
  mounted() {
    this.option.yAxis.data = this.yAxisData
    this.option.series[0].data = this.seriesData
    this.initChart()
    // ajaxGet('/view/device/GetOrderEquipment').then(res => {
    //   this.yAxisData = res.data.map(item => item.Equipment)
    //   this.seriesData = res.data.map(item => item.Flux)
    //   const len = this.colors.length
    //   this.seriesData = this.seriesData.map((v, i) => {
    //     const color = this.colors[i % len]
    //     return {
    //       value: v,
    //       name: this.yAxisData[i],
    //       itemStyle: {
    //         color
    //       }
    //     }
    //   })
    //   this.option.yAxis.data = this.yAxisData
    //   this.option.series[0].data = this.seriesData
    //   this.initChart()
    // })
  },
  methods: {
    initChart() {
      this.chartIns = echarts.init(this.$refs.chartDom)
      this.chartIns.setOption(this.option)
      this.setInv()
    },
    setInv() {
      this.aniInterval = setInterval(() => {
        this.startMove()
      }, 3000)
    },
    startMove() {
      const tmpYAxis = this.yAxisData.shift()
      this.yAxisData.push(tmpYAxis)
      const tmpSeries = this.seriesData.shift()
      this.seriesData.push(tmpSeries)
      this.chartIns.setOption(this.option)
    },
    handleMouseEnter() {
      clearInterval(this.aniInterval)
    },
    handleMouseLeave() {
      this.setInv()
    },
    getConfig() {
      return this.option
    }
  }
}
</script>

<style lang="less" scoped>
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
    font-size: 24px;
    margin-bottom: 10px;
  }
  // .lc1-details {
  //   height: 50px;
  //   font-size: 16px;
  //   display: flex;
  //   align-items: center;
  //   text-indent: 20px;
  //   color: #096dd9;
  // }

  // .lc1-chart {
  //   flex: 1;
  // }
  .chart-dom {
    width: 100%;
    height: calc(100% - 40px);
    // background-color: #fff;
  }
}
</style>
