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
        <h3 class="graph-header">本周算力统计图</h3>
        <div id="myChart"
             :style="{width: '100%', height: '3rem'}">
        </div>
        <h3 class="graph-header">当日算力统计图</h3>
        <div id="myChartTime1"
             :style="{width: '100%', height: '3rem'}">
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
  import { hashrate, hashrateTime } from '@/utils/index'
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
      this.id = this.$route.query.id
    },
    methods: {
      drawLine () {
        // 基于准备好的dom，初始化echarts实例
        this.getTempData({ id: this.$route.query.id }).then(res => {
          let data = {}
          if (res && res.code === 200) {
            data = res.data
          }
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          // 绘制图表
          let opt = hashrate(data)

          myChart.setOption(opt)
          this.data.push(1)
        })
        this.getDateTimeTempData({ id: this.$route.query.id }).then(res => {
          let data = {}
          if (res && res.code === 200) {
            data = res.data
          }
          let myChartTime1 = this.$echarts.init(document.getElementById('myChartTime1'))
          let optTime1 = hashrateTime(data)
          // console.log(optTime1)
          myChartTime1.setOption(optTime1)
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
