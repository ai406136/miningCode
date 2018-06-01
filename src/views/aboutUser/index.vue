<template>
  <div class="about-user">
    <div class="about-user_logs">
      <img src="../../assets/img/logo1.png" />
      <p>版本号： v1.0.0</p>
    </div>
    <ul class="about-user_iphone">
      <li>
        <!-- <span>电话号码：</span> -->
        <a class="about-user_tel"
           href="tel:0755-29004980">0755-29004980</a>
      </li>
    </ul>
    <div class="about-user_copyright">Copyright@2018 深圳市梧桐在线科技有限公司</div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang='less' scoped>
  .about-user {
    height: 4rem;
    width: 100%;
    position: absolute;
    top: 63px;
    // background: url("../../assets/img/logo1.png") repeat center;
    background-size: 30%;
  }
  .about-user_tel {
    color: #22adf8;
  }
  .about-user_copyright {
    position: fixed;
    bottom: 0.5rem;
    width: 100%;
    text-align: center;
    color: #afa9a9;
  }
  .about-user_iphone {
    display: flex;
    justify-content: center;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.1rem 0;
      padding-left: 0.1rem;
    }
  }
  .about-user_logs {
    width: 100%;
    text-align: center;
    margin-top: 0.2rem;
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
    }
    p {
      font-size: 16px;
      margin-top: 0.1rem;
    }
  }
</style>
