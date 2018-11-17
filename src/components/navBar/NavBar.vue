<template>
  <van-nav-bar
    :title="title"
    :left-text="leftText"
    :right-text="rightText"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>

<script>
export default {
  props: ['title', 'leftText', 'rightText'],
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    onClickRight() {
      
    }
  }
}
</script>

