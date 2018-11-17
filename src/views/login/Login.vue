<template>
  <div class="test-scss">
    <div class="m-scss">
      {{msg}}
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'Login'
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.test-scss {
  .m-scss {
    color: #5353d3
  }
}
</style>
