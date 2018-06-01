<style lang='less' scoped>
  .setting-zhan {
    display: flex;
    justify-content: space-between;
    padding: 0.05rem 0.15rem;
    background-color: #fff;
    margin-bottom: 0.1rem;
    span {
      margin-top: 0.1rem;
      font-size: 0.18rem;
    }
  }

  .setting-img {
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .setting-btn {
    padding: 0.085rem 0.15rem;
    background-color: #fff;
    border-bottom: 1px solid #efefef;
    vertical-align: middle;
    i {
      font-size: 0.25rem;
      vertical-align: middle;
    }
    p {
      float: right;
      height: 100%;
      line-height: 0.25rem;
    }
  }

  .imgFile {
    background-color: transparent;
  }
  .account-top {
    // padding: .2rem 0;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #efefef;
    // background: url("../../assets/img/kuan.png") no-repeat center 50%;
    background: linear-gradient(left, #0fa2f9, #59d7f5) !important;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#0fa2f9),
      to(#59d7f5)
    ) !important;
    background-size: cover;
    background-size: 100%;
    margin-bottom: 0.05rem;
    // -webkit-filter: blur(5px);
    // -moz-filter: blur(5px);
    // -ms-filter: blur(5px);
    // filter: blur(5px);
    margin-top: -0.05rem;
  }

  .account-img {
    margin: 0 auto;
    text-align: center;
    margin-bottom: 10px;
    position: absolute;
    top: 0.73rem;
    left: 0;
    right: 0;
    img {
      width: 0.8rem;
      height: 0.8rem;
      overflow: hidden;
      border-radius: 50%;
      margin: 0 auto;
    }
  }
  .account-user_iphone {
    width: 100%;
    overflow: hidden;
    margin-top: 0.08rem;
    color: #fff;
    font-size: 0.18rem;
  }
  .account-center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.1rem;
    background-color: #fff;
    margin-bottom: 0.05rem;
  }

  .account-center_ul {
    display: flex;
    li {
      display: flex;
      width: 50%;
      justify-content: center;
      flex-wrap: wrap;
      padding: 0.1rem 0;
      p {
        width: 100%;
        font-size: 0.18rem;
        text-align: center;
      }
      span {
        display: flex;
        justify-content: center;
        font-weight: bold;
        max-width: 190px;
        font-size: 0.45rem;
        color: #1687da;
        text-align: center;
      }
    }
  }

  .account-sisint {
    padding: 0.1rem 0.3rem;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #efefef;
    span {
      display: flex;
      width: 0.28rem;
      height: 0.28rem;
      line-height: 0.29rem;
      background-color: #0289ec;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
    }
    i {
      font-size: 0.18rem;
      color: #fff;
    }
    p {
      border-radius: 3px;
      height: 0.15rem;
      line-height: 0.165rem;
      // background-color: ##0289ec;
      padding: 0.05rem;
      // color: #fff;
      margin-left: 0.1rem;
    }
  }

  .account-color2 {
    // background-color: #0e67b7 !important;
  }

  .account-color {
    background-color: #7dd53f !important;
  }

  .account-sisint2 {
    i {
      font-size: 0.16rem;
    }
  }
</style>

<template>
  <div class="account">
    <div class="account-top">
    </div>
    <div class="account-img"
         @click="upImg">
      <img src="../../assets/img/toxian.jpg"
           v-if="!imgSrc" />
      <img v-else
           :src="'http://120.78.164.148/Public/Upload/' + imgSrc"
           alt="" />

      <div class="account-user_iphone">{{iphone}}</div>
    </div>

    <div class="account-center">
      <ul class="account-center_ul">
        <li>
          <p>我的矿机数量</p>
          <span>{{listNumber}}</span>
        </li>
        <li>
          <p>矿机总算力</p>
          <span>{{hashNumber}}</span>
        </li>
      </ul>
    </div>
    <ul @touchstart="touchDom($event, 'add')"
        @touchend="touchDom($event, 'rem')">
      <router-link tag='li'
                   :to="{path: '/FindKey'}"
                   class="account-sisint account-sisint2">
        <span class="account-color2">
          <i class="iconfont icon-icon56-copy"></i>
        </span>
        <p class="account-p">
          修改密码
        </p>
      </router-link>
      <li class="account-sisint account-sisint3"
          @click="fenx"
          id="fenx">
        <span class="account-color2">
          <i class="iconfont icon-fenxiang"></i>
        </span>
        <p class="account-p account-color2">分享应用</p>
      </li>
      <router-link tag="li"
                   :to="{path: '/aboutUser'}"
                   class="account-sisint account-sisint3"
                   @click="aboutUs">
        <span class="account-color2">
          <i class="iconfont icon-about"></i>
        </span>
        <p class="account-p account-color2">关于我们</p>
      </router-link>
      <li class="account-sisint account-sisint3"
          @click="goBack">
        <span class="account-color2">
          <i class="iconfont icon-tuichu"></i>
        </span>
        <p class="account-p account-color2">退出登录</p>
      </li>
    </ul>

    <mt-actionsheet :actions="actions"
                    v-model="sheetVisible">
    </mt-actionsheet>
    <mt-actionsheet :actions="actions2"
                    v-model="sheetVisible2">
    </mt-actionsheet>
    <input ref="files"
           id="files"
           type='file'
           class="imgFile"
           @change="upImgFile"
           accept="image/*"
           style="display:none;">
  </div>
</template>

<script>
  import { touchDoms, logout } from '@/utils/index'
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        imgSrc: '',
        sheetVisible: false,
        sheetVisible2: false,
        // imgSrc: '',
        def: '../../assets/img/toxian.jpg',
        actions: [{
          name: '确定',
          method () {
            logout()
          }
        }],
        actions2: [{
          name: '更换头像',
          method () {
            document.getElementById('files').click()
          }
        }]
      }
    },
    created () {
      this.imgSrc = localStorage.getItem('imgSrc')
    },
    methods: {
      fenx () {
        console.log(this.$apiss)
        console.log(window.api)
      },
      aboutUs () {
        // 关于我们
      },
      touchDom (dom, name) {
        touchDoms(dom, name)
      },
      goBack () {
        this.sheetVisible = true
      },
      upImg () {
        // this.sheetVisible2 = true
        document.getElementById('files').click()
      },
      checPic (name) {
        var rgx = '(.jpg|.png|.gif|.jpeg)$'
        var re = new RegExp(rgx)
        if (re.test(name.toLowerCase())) {
          return true
        } else {
          return false
        }
      },
      upImgFile (e) {
        if (e.target.files && e.target.files.length) {
          const file = e.target.files[0]
          let isImg = this.checPic(e.target.files[0].name)
          if (!isImg) {
            console.log(e.target.files[0].name)
            this.$toast({
              title: '暂只支持jpg、png、gif、jpeg后缀图片',
              message: '暂只支持jpg、png、gif、jpeg后缀图片',
              position: 'center',
              iconClass: ''
            })
            return
          }
          let formData = new FormData()
          formData.append('file', file)
          formData.append('token', localStorage.getItem('token'))
          let config = {
            url: 'home/user/imguplod',
            method: 'post',
            data: formData,
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
          this.$http2(config).then(res => {
            console.log(res)
            if (res.code === 200 || res.code === '200') {
              try {
                this.imgSrc = res.data.img
                localStorage.setItem('imgSrc', res.data.img)
                this.$toast({
                  message: '头像上传成功',
                  position: 'center',
                  duration: 5000
                })
              } catch (err) {
                this.$toast({
                  message: '保存错误',
                  position: 'center',
                  duration: 5000
                })
              }
            }
          }).catch(err => {
            this.$toast({
              message: '保存错误',
              position: 'center',
              duration: 5000
            })
            console.log(err)
          })
        }
      }
    },
    computed: {
      ...mapGetters([
        'hashNumber',
        'listNumber',
        'iphone'
      ])
    }
  }
</script>
