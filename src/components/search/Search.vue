<template>
  <van-search 
    v-model="value" 
    placeholder="请输入搜索关键词" 
    show-action 
    @search="onSearch"
  >
    <div slot="action" class="msg dot" @click="onSearch">
      <van-icon name="records"/>
    </div>
  </van-search>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onSearch: function() {

    }
  }
}
</script>

<style lang="scss" scoped>

.msg {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: .9rem;
}

.dot:after {
  content: '';
  position: absolute;
  top: 10px;
  right: 6px;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: #f44;
}
</style>

