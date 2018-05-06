<style lang='less' scoped>
  .graph-scroll_child {
    padding-bottom: 0.9rem;
  }

  .graph-header {
    background-color: #dee1e2;
    line-height: 0.35rem;
    text-indent: 0.1rem;
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
    color: #333;
  }

  .home-scroll {
    position: fixed;
    top: 65px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transition: all 0.2s;
    overflow: hidden;
  }
</style>

<template>
  <div class="graph">
    <Scroll :data='data'
            class="home-scroll">
      <div class="graph-scroll_child">
        <h3 class="graph-header">本周GPU温度图</h3>
        <div id="myChart2"
             :style="{width: '100%', height: '4rem'}"></div>
        <h3 class="graph-header">当日GPU温度图</h3>
        <div id="myChartTime2"
             :style="{width: '100%', height: '3rem'}">
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
  import { CpuTemperature, CpuTemperatureTime } from '@/utils/index'
  import Scroll from '@/components/scroll.vue'
  import { mapActions } from 'vuex'
  export default {
    name: 'hello',
    data () {
      return {
        data: [],
        id: ''
      }
    },
    components: {
      Scroll
    },
    mounted () {
      this.drawLine()
      console.log(this.$route.query.id)
      this.id = this.$route.query.id
      console.log(this.$route.query.id)
    },
    methods: {
      drawLine () {
        // 基于准备好的dom，初始化echarts实例
        console.log(this.id, 112233)
        this.getTempData({ id: this.$route.query.id }).then(res => {
          console.log(res)
          let data = {}
          if (res.code === 200) {
            data = res.data
          }
          let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
          // 绘制图表
          let opt2 = CpuTemperature(data)
          myChart2.setOption(opt2)
          this.data.push(1)
        })
        this.getDateTimeTempData({ id: this.$route.query.id }).then(res => {
          let data = {}
          if (res.code === 200) {
            data = res.data
          }
          let myChartTime2 = this.$echarts.init(document.getElementById('myChartTime2'))
          let optTime2 = CpuTemperatureTime(data)
          myChartTime2.setOption(optTime2)
          this.data.push(1)
        })
      },
      ...mapActions([
        'getTempData',
        'getDateTimeTempData'
      ])
    }
  }
</script>
