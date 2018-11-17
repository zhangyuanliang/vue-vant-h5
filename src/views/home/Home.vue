<template>
  <div class="home-wrap bg">
    <Search></Search>
    <Swiper></Swiper>
    <div class="home-cls">
      <div class="item">
        <img src="../../assets/image/rule1.png" alt="">
        <span>车险投保</span>
      </div>
      <div class="item">
        <img src="../../assets/image/rule2.png" alt="">
        <span>续保报价</span>
      </div>
      <div class="item">
        <img src="../../assets/image/rule3.png" alt="">
        <span>更多保险</span>
      </div>
      <div class="item">
        <img src="../../assets/image/rule4.png" alt="">
        <span>活动中心</span>
      </div>
    </div>
    <div class="home-func">
      <div class="row flex">
        <div class="item flex">
          <img src="../../assets/image/center1.png" alt="">
          <div class="content">
            <p class="title">邀请好友</p>
            <p class="des">好友注册拿奖励</p>
          </div>
        </div>
        <div class="item flex">
          <img src="../../assets/image/center2.png" alt="">
          <div class="content">
            <p class="title">学习专区</p>
            <p class="des">提升技能了解产品</p>
          </div>
        </div>
      </div>
      <div class="row flex">
        <div class="item flex">
          <img src="../../assets/image/icoNote.png" alt="">
          <div class="content">
            <p class="title">增值业务</p>
            <p class="des">享服务赚外快</p>
          </div>
        </div>
        <div class="item flex">
          <img src="../../assets/image/center3.png" alt="">
          <div class="content">
            <p class="title">会员中心</p>
            <p class="des">成长晋级领红包</p>
          </div>
        </div>
      </div>
    </div>
    <div class="panel-msg flex content-wrap">
      <img src="../../assets/image/icoCheck.png" alt="">
      <div class="content">
        <p class="title">你有新的课程要学习啦</p>
        <p class="des ellipsis">【你有新的课程要学习啦】增员类课程又更新啦！请...</p>
      </div>
      <div class="arrow">
        <img src="../../assets/image/arrowRight_grey.png" alt="">
      </div>
    </div>

    <Tabbar></Tabbar>
  </div>
</template>

<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.4.0.js"></script>
<script>
wx.config({
  debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  appId: 'wx4e95c2044136923d', // 必填，公众号的唯一标识
  timestamp: '', // 必填，生成签名的时间戳
  nonceStr: '', // 必填，生成签名的随机串
  signature: '',// 必填，签名
  jsApiList: [

  ] // 必填，需要使用的JS接口列表
});
</script>


<script>
// import NavBar from '@/components/navBar/NavBar'
import Search from '@/components/search/Search'
import Tabbar from '@/components/tabbar/Tabbar'
import Swiper from '@/components/swipe/Swipe'

export default {
  data () {
    return {
      
    }
  },
  mounted () {},
  components: {
    // NavBar,
    Search,
    Swiper,
    Tabbar
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
  @import '@/styles/mixin.scss';

  .home-wrap {
    height: 100%;
  }

  .home-cls {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #fff;
    padding: .5rem .8rem;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 1.6rem;
        height: 1.6rem;
        margin-bottom: .1rem;
      }
      span {
        transform-origin: 50% 50%;
        -webkit-transform-origin: 50% 50%;
        transform: scale(0.9);
        -webkit-transform: scale(0.9);
      }
    }
  }

  .home-func {
    margin-top: .2rem;
    background: #fff;
    .row {
      border-bottom: 1px solid #e9e7e7;
      .item {
        padding: .4rem 0;
        width: 50%;
        justify-content: flex-start;
        padding-left: 1rem;
        img {
          width: 1.4rem;
          height: 1.4rem;
          margin-right: .4rem;
        }
        .title {
          transform-origin: 0% 0%;
          -webkit-transform-origin: 0% 0%;
          transform: scale(0.8);
          -webkit-transform: scale(0.8);
        }
        .des {
          color:#afafaf;
          transform-origin: 0% 0%;
          -webkit-transform-origin: 0% 0%;
          transform: scale(0.8);
          -webkit-transform: scale(0.8);
        }
      }
      .item:first-of-type {
        border-right: 1px solid #e9e7e7;
      }
    }
  }

  .panel-msg {
    height: 2.4rem;
    background: #fff;
    margin-top: .2rem;
    >img {
      width: 1.4rem;
      height: 1.4rem;
      margin-right: .4rem;
    }
    .arrow img {
      width: .4rem;
      height: .4rem;
    }
    .content {
      width: 86%;
    }
    .title {
      transform-origin: 0% 0%;
      -webkit-transform-origin: 0% 0%;
      transform: scale(0.8);
      -webkit-transform: scale(0.8);
    }
    .des {
      color:#afafaf;
      transform-origin: 0% 0%;
      -webkit-transform-origin: 0% 0%;
      transform: scale(0.8);
      -webkit-transform: scale(0.8);
    }
  }

</style>
