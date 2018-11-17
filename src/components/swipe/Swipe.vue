<template>
  <div class="home-banner">
    <!-- <van-swipe :autoplay="3000" :height="140">
      <van-swipe-item v-for="(image, index) in images" :key="index" v-lazy="image">
        <img :src="image" alt=""/>
      </van-swipe-item>
    </van-swipe> -->
    <van-swipe :autoplay="3000" :height="140">
      <van-swipe-item>
        <img src="../../assets/image/banner1.jpg" alt=""/>
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/image/banner2.jpg" alt=""/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        '../../assets/image/banner1.jpg',
        '../../assets/image/banner2.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home-banner {
  img {
    width: 100%;
    height: 100%;
  }
}

</style>

