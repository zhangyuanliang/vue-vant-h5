<template>
  <header class="head-top content-wrap">
    <section class="head-goback" v-if="goBack" @click="$router.go(-1)">
      <svg width="100%" height="100%" viewBox="2 0 10 18" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <polyline points="12,18 4,9 12,0" style="fill:none;stroke:#fff;stroke-width:1"/>
      </svg>
    </section>
    <!-- 
    <router-link :to="userInfo? '/profile':'/login'" v-if='signinUp' class="head_login">
      <svg class="user_avatar" v-if="userInfo">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
      </svg>
      <span class="login_span" v-else>登录|注册</span>
    </router-link> -->
    <section class="title-head ellipsis" v-if="headTitle">
      <span class="title_text">{{headTitle}}</span>
    </section>
    <slot name="edit"></slot>
    <slot name="msite-title"></slot>
    <slot name="changecity"></slot>
    <slot name="changeLogin"></slot>
  </header>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  data () {
    return {}
  },
  mounted () {
    // 获取用户信息
    // this.getUserInfo()
  },
  props: ['signinUp', 'headTitle', 'goBack'],
  computed: {
    ...mapState([
      'userInfo'
    ])
  },
  methods: {
    ...mapActions([
      'getUserInfo'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.head-top {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  @include wh(100%, 1.88rem);
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: $blue;
}

.head-goback {
  @include wh(.9rem, .9rem);
}

.title-head {
  @include center;
  width: 50%;
  color: #fff;
  text-align: center;
  line-height: 1.87rem;
  .title_text {
    @include sc(.7rem, #fff);
    text-align: center;
  }
}
</style>
