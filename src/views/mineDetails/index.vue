<style lang='less' scoped>
  .mining-header {
    height: 0.3rem;
    display: flex;
    padding: 0.03rem 0.16rem;
    align-items: center;
    justify-content: space-between;
    color: #333;
    background-color: #f5f5f5;
    font-weight: 100;
    border: none;
    span {
      font-weight: bold;
    }
  }

  .mining-ul {
    li {
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.09rem 0.15rem;
      word-break: break-all;
      border-bottom: 1px solid #ddd;
      &:last-child {
        border: none;
      }
      div {
        width: 0.65rem;
        font-family: bold;
        color: #000;
      }
      p {
        font-weight: 100;
        color: #676767;
        text-align: right;
      }
    }
  }

  .mining-ul2 {
    li {
      div {
        // width: 1.65rem;
      }
    }
  }

  .btn {
    height: 0.25rem;
    background-color: #fff;
  }

  .btn2 {
    height: 0.25rem;
  }

  .addRemark {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.15rem;
    margin-top: 0.1rem;
    p {
      color: red;
    }
  }

  .mining-box {
    padding-bottom: 83px;
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

  .mining-remark {
    position: relative;
  }

  .reRemark {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: 100%;
  }

  .minie-to_box {
    background-color: #fff;
    margin-top: 0.09rem;
  }

  .minie-tu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.17rem;
    border-bottom: 1px solid #dedede;
    &:last-child {
      border: none;
    }
  }
  .setInp {
    flex-grow: 1;
    flex-shrink: 1;
    height: 0.4rem;
    margin-right: 4px;
    border: 1px solid #dedede;
    user-select: text;
    -webkit-user-select: text;
    user-select: text !important;
    -webkit-user-select: text !important;
  }
  .btn1 {
    text-align: center;
    border: 1px solid #dedede;
    line-height: 25px;
    border-radius: 5px;
  }
</style>
<template>
  <div class="mining">
    <Scroll :data='remarkList'
            class="home-scroll">
      <div class="mining-box">
        <div class="mining-name">
          <h3 class="mining-header">
            <span>备注</span>
            <mt-button @click="addRemark"
                       class="btn"
                       type="default"
                       size='small'
                       v-if="remark === '' || remark === null">添加备注</mt-button>
            <mt-button @click="addRemark"
                       class="btn"
                       type="default"
                       v-else
                       size='small'>修改备注</mt-button>
          </h3>
          <ul>
            <li class="mining-remark">
              <mt-field placeholder="请输入备注"
                        v-model="remark"></mt-field>
            </li>
          </ul>
        </div>
        <div class="mining-name">
          <h3 class="mining-header">
            <span>矿机名称</span>
            <span>{{details.hostname}}</span>
          </h3>
          <ul class="mining-ul">
            <li>
              <div>网卡</div>
              <p>{{details.lan_chip}}</p>
            </li>
            <li>
              <div>mac地址</div>
              <p>{{details.mac}}</p>
            </li>
            <li>
              <div>显卡驱动</div>
              <p>{{details.driver}}</p>
            </li>
            <li>
              <div>GPU数量</div>
              <p>{{details.gpus}}</p>
            </li>
            <li>
              <div>挖矿软件</div>
              <p>{{details.miner}}</p>
            </li>
          </ul>
        </div>
        <div class="mining-name">
          <h3 class="mining-header">
            <span>挖矿软件版本</span>
            <span>{{details.miner_version}}</span>
          </h3>
          <ul class="mining-ul mining-ul2">
            <li>
              <div>钱包地址(当前使用)</div>
              <p style="padding: 6px"
                 v-show="!isSet">{{details.proxywallet}}</p>
              <!-- <mt-field class="setInp"
                        v-show='isSet'
                        placeholder="请输入钱包地址"
                        v-model="details.proxywallet"></mt-field> -->
              <input class="setInp"
                     v-show='isSet'
                     onpaste="return true"
                     oncontextmenu="return true"
                     oncopy="return true"
                     oncut="return true"
                     autocomplete='off'
                     v-model="details.proxywallet" />
              <div class="btn btn1"
                   style="line-height:'25px'"
                   v-show="!isSet"
                   @click="isSet = true">修改</div>
              </mt-button>
              <mt-button class="btn"
                         type="default"
                         v-show="isSet"
                         size='small'
                         @click="setproxywallet">保存</mt-button>
              </mt-button>
              <li>
                <div>矿池(当前使用)</div>
                <p>{{details.proxypool1}}</p>
              </li>
              <li>
                <div>操作系统</div>
                <p>{{details.kernel}}</p>
              </li>
              <li>
                <div>IP地址</div>
                <p>{{details.ip}}</p>
              </li>
              <li>
                <div>主板厂商</div>
                <p>{{details.manu}}</p>
              </li>
              <li>
                <div>主板型号</div>
                <p>{{details.mobo}}</p>
              </li>
          </ul>
        </div>
        <div class="addRemark">
          <p>更多参数显示将在后续版本中逐步开放...</p>
        </div>

        <div class="minie-to_box">
          <div class="minie-tu">
            <span>算力统计图</span>
            <mt-button class="btn2"
                       size='small'
                       type='primary'
                       @click="goGraph">查看图表</mt-button>
          </div>
          <div class="minie-tu">
            <span>GPU温度统计图</span>
            <mt-button class="btn2"
                       size='small'
                       type='primary'
                       @click="goGraph2">查看图表</mt-button>
          </div>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
  import Scroll from '@/components/scroll.vue'
  import { mapActions } from 'vuex'
  import { MessageBox } from 'mint-ui'
  export default {
    data () {
      return {
        copyproxywallet: '',
        details: {
          miner_version: '',
          hostname: '',
          lan_chip: '',
          mac: '',
          driver: '',
          gpus: '',
          miner: '',
          proxywallet: '',
          proxypool1: '',
          kernel: '',
          ip: '',
          manu: '',
          mobo: ''
        },
        isSet: false,
        remark: '',
        remarkList: [
          {
            remark: '',
            id: null
          }
        ]
      }
    },
    components: {
      Scroll
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        let data = {
          id: this.$route.query.id
        }
        this.getDetail(data).then(data => {
          let code = +data.code
          if (code === 200 && data.data) {
            this.details = data.data
            console.log(this.details)
            this.remark = this.details.remark || ''
            this.copyproxywallet = this.details.proxywallet
          }
        })
      },
      addRemark () {
        if (this.remark === '') {
          this.$toast({
            message: '请输入备注',
            position: 'center'
          })
          return
        }
        let data = {
          id: this.details.id,
          remark: this.remark
        }
        this.setRem(data).then(res => {
          let code = +res.code
          console.log(code, res)
          if (code === 200) {
            this.$toast({
              message: '操作成功',
              position: 'center'
            })
          }
        })
      },
      setProxy () {
        document.activeElement.blur()
      },
      setproxywallet () {
        if (this.details.proxywallet === this.copyproxywallet) {
          this.isSet = false
          return
        }
        let datas = {
          id: this.details.id,
          proxywallet: this.details.proxywallet
        }
        // console.log(document.querySelector('.mint-msgbox-input input').querySelector('input'))
        MessageBox.prompt(' ', '请输入密码验证', { inputType: 'password' }).then(({ value, action }) => {
          let logIndata = {
            username: localStorage.getItem('miningIphone'),
            password: value
          }
          this.login(logIndata).then(loginRes => {
            // let data = loginRes.data
            let code = +loginRes.data.code
            if (code !== 200) {
              this.$toast({
                title: '请求错误',
                message: '密码错误',
                position: 'center',
                iconClass: ''
              })
              return
            }
            this.setWallet(datas).then(res => {
              console.log(res, 1)
              if (res.code === '200') {
                this.$toast(res.message)
              }
              this.isSet = false
            })
          })
        })
      },
      goGraph () {
        let id = this.$route.query.id
        this.$router.push({
          path: '/graph',
          query: { id: id }
        })
      },
      goGraph2 () {
        let id = this.$route.query.id
        this.$router.push({
          path: '/graph2',
          query: { id: id }
        })
      },
      ...mapActions([
        'getDetail',
        'setRem',
        'setWallet',
        'login'
      ])
    }
  }
</script>
