<template>
  <div class="test-scss">
    <div class="m-scss pl-e ">
      {{msg}}
      <input type="button" value="vueX" @click="testStore"/>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data () {
    return {
      msg: 'TestVueX'
    }
  },
  computed: {
    ...mapGetters([
      'graphState'
    ])
  },
  methods: {
    ...mapActions([
      'toggleIsDragging',
      'changSelectedNode'
    ]),
    testStore: function() {
      this.graphState.toLink = true
      this.changSelectedNode({})
      this.toggle_isDragging(true)
      console.log(this.graphState);
    }
  }
}
</script>

<style lang="scss" scoped>
.test-scss {
  display: flex;
  flex-direction: row;
  justify-content: center;
  .m-scss {
    padding-top: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    input {
      margin-left: .4rem;
    }
  }
}
</style>
