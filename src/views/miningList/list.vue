<style lang='less' scoped>
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

  .home-ul_top {
    margin-top: 20px;
    padding-bottom: 55px;
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
</style>
<style lang='less'>
  .mint-cell-value {
    // height: 650px;
    overflow: hidden;
  }
</style>

<template>
  <ul class="hom-ul"
      :class="{'home-ul_top': isSearch === true}">
    <li v-for="(item, index) in list"
        :key="item.id"
        class="home-li"
        :ref='item.id'
        @touchstart="touchDom(item.id, 'add')"
        @touchend="touchDom(item.id, 'rem')">
      <div class="home-img">
        <img src='../../assets/img/kuan.png' />
      </div>
      <div class="home-text">
        <h3 class="list-title">
          {{item.hostname}}
          <div>
            <mt-button class="list-header_btn"
                       size='small'
                       type='primary'
                       @click="rest(item.id)">重启</mt-button>
            <mt-button class="list-header_btn"
                       size='small'
                       type='primary'
                       @click="screenList(item.id)">查看详情</mt-button>
          </div>
        </h3>
        <div class="home-text_bottom">
          <div>
            <span>矿池: {{item.proxypool1}}</span>
            <span>显卡: {{item.gpus}}个</span>
          </div>
          <div>{{item.date}}</div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  import { addClass, remClass } from '@/utils/index'
  import { mapActions } from 'vuex'
  import { MessageBox } from 'mint-ui'
  export default {
    props: {
      list: {
        type: Array,
        default: []
      },
      isSearch: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      touchDom (dom, name) {
        if (name === 'add') {
          addClass(this.$refs[dom][0], 'home-li_click')
        } else {
          remClass(this.$refs[dom][0], 'home-li_click')
        }
      },
      screenList (id) {
        this.$emit('screenList', id)
      },
      rest (id) {
        MessageBox.prompt(' ', '请输入密码验证', { inputType: 'password' }).then(({ value, action }) => {
          console.log(value)
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
            this.resetMinig({ id: id }).then(res => {
              this.$emit('ress')
              if (res.result === '500') {
                this.$toast({
                  message: res.msg,
                  position: 'top'
                })
              }
            })
          })
        })
      },
      ...mapActions([
        'resetMinig',
        'login'
      ])
    }
  }
</script>
