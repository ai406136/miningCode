
<style lang='less' scoped>
  .home {
    width: 100%;
  }

  .search-ul {
    margin-top: 20px;
    padding-bottom: 0.75rem;
  }

  .home-scroll {
    position: absolute;
    top: 119px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transition: all 0.3s;
    overflow: hidden;
  }

  .home-scroll2 {
    top: 98px;
  }

  .home-li {
    display: flex;
    padding: 0.1rem 0.15rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
  }

  .home-img {
    width: 0.75rem;
    height: 0.75rem;
    margin-right: 0.15rem;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .home-text {
    display: flex;
    width: 77%;
    flex-wrap: wrap;
    padding: 0.05rem 0;
    align-content: space-between;
    h3 {
      width: 100%;
    }
  }

  .list-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .home-text_bottom {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    span {
      margin-right: 5px;
    }
  }

  .list-header_btn {
    height: 0.25rem;
  }

  .mining-list_refresh {
    position: fixed;
    bottom: 0.7rem;
    right: 0.25rem;
    padding: 0.09rem;
    i {
      color: #afa489;
      font-weight: bold;
      font-size: 0.25rem;
    }
  }

  .xuan {
    animation: myfirst 1s infinite;
  }

  @keyframes myfirst {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .search {
    position: absolute;
    width: 100%;
    top: 0.64rem;
  }
</style>
<style lang='less'>
  .mint-search {
    height: 88vh !important;
  }
  .miningLists {
    .mint-search-list {
      top: 10px;
    }
  }
</style>

<template>
  <div class="home miningLists">
    <mt-navbar v-model="selected"
               @click.native="select">
      <mt-tab-item id="0">全部矿机</mt-tab-item>
      <mt-tab-item id="1">掉线矿机</mt-tab-item>
      <mt-tab-item id="2">异常矿机</mt-tab-item>
    </mt-navbar>
    <Scroll :data='list'
            class="home-scroll"
            v-show="!serch">
      <MiningList :list='list'
                  @screenList='screenList'
                  @ress='ress'></MiningList>
    </Scroll>
    <div class="mining-list_refresh"
         :class="{'xuan': upajx === true}"
         @click="upData">
      <i class="iconfont icon-shuaxin"></i>
    </div>
    <mt-search placeholder='请输入矿池名称、矿机备注，钱包地址查询'
               cancel-text=""
               class="search"
               v-model="searchValue"
               v-show="serch">
      <mt-cell>
        <MiningList :list='searchData'
                    @screenList='screenList'
                    :isSearch='true'
                    @ress='ress'></MiningList>
      </mt-cell>
    </mt-search>
  </div>
</template>

<script>
  import Scroll from '@/components/scroll.vue'
  import MiningList from '@/views/miningList/list'
  import { getDate } from '@/utils/index'
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  export default {
    data () {
      return {
        selected: '0',
        list: [],
        searchData: [],
        searchValue: '',
        upajx: false,
        dataKey: {
          '双优': 'eth.uupool.cn:8008',
          '币网': 'ether.bw.com:8008',
          '鱼池': 'eth.f2pool.com:8008',
          '星火[广东]': 'guangdong-pool.ethfans.org:3333',
          '星火[华北]': 'huabei-pool.ethfans.org:3333'
        }
      }
    },
    components: {
      Scroll, MiningList
    },
    created () {
      this.getData()
    },
    mounted () {
      this.$emit('serc', () => {
        console.log(2)
      })
    },
    methods: {
      ress () {
        console.log(1)
        this.getData()
      },
      getData () {
        this.upajx = true
        let data = this.setSelectData()
        this.getList(data).then(data => {
          let code = +data.code
          setTimeout(() => {
            this.upajx = false
          }, 1000)
          if (code === 200) {
            this.list = data.data.map(v => {
              v.date = getDate()
              for (let i in this.dataKey) {
                if (v.proxypool1 === this.dataKey[i]) {
                  v.proxypool1 = i
                }
              }
              v.gpus = +v.gpus
              return v
            })
          }
        })
      },
      getSearch () {
        this.getList({
          type: 3,
          value: this.searchValue
        }).then(res => {
          if (res.code === '200') {
            this.searchData = res.data.map(v => {
              v.date = getDate()
              for (let i in this.dataKey) {
                if (v.proxypool1 === this.dataKey[i]) {
                  v.proxypool1 = i
                }
              }
              v.gpus = +v.gpus
              return v
            })
          }
        })
      },
      select () {
        this.getData()
      },
      screenList (id) {
        this.$router.push({
          path: '/mineDetails',
          query: { id: id }
        })
      },
      switchover (data) {
        this.active = data
      },
      setSelectData () {
        return {
          type: this.selected !== '0' ? this.selected : undefined
        }
      },
      upData () {
        this.getData()
      },
      ...mapActions([
        'getList'
      ]),
      ...mapMutations([
        'SET_SERCH'
      ])
    },
    watch: {
      searchValue () {
        if (this.searchValue === '') {
          // this.SET_SERCH(false)
        } else {
          this.getSearch()
        }
      }
    },
    computed: {
      ...mapGetters([
        'serch'
      ])
    }
  }
</script>
