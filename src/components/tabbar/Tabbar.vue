<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="shop">首页</van-tabbar-item>
    <van-tabbar-item icon="chat" dot>提升</van-tabbar-item>
    <van-tabbar-item icon="records">展业</van-tabbar-item>
    <van-tabbar-item icon="gold-coin" info="5">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

