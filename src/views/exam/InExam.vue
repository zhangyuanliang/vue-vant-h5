<template>
  <div class="inexam-wrap bg">
    <NavBar :title="title"></NavBar>
    <div class="flex title">
      <div class="l-1 flex-g">
        单选题 (本题<span class="cb">10</span>分)
      </div>
      <div class="cb">
        <span class="f-m">2</span>/10
      </div>
    </div>
    <div class="content">
      <p class="ask">
        我国指导保险销售从业人员职业道德建设的纲领性的现行文件是
      </p>
      <div class="question">
        <div class="flex item">
          <span class="flex ques-btn selected">A</span>
          <span>《中华人民共和国保险法》</span>
        </div>
        <div class="flex item">
          <span class="flex ques-btn">B</span>
          <span>《中华人民共和国保险法》</span>
        </div>
        <div class="flex item">
          <span class="flex ques-btn">C</span>
          <span>《中华人民共和国保险法》</span>
        </div>
        <div class="flex item">
          <span class="flex ques-btn">D</span>
          <span>《中华人民共和国保险法》</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navBar/NavBar'
export default {
  data() {
    return {
      title: '考试中'
    }
  },
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
$blue: #0265FF;
.cb {
  color: $blue;
}

.f-m {
  font-size: .5rem;
}

.l-1:before {
  content: '';
  position: absolute;
  top: 14px;
  left: 18px;
  width: 2px;
  height: 14px;
  background: #000;
}

.inexam-wrap {
  height: 100%;
  .title {
    flex-grow: 1;
    position: relative;
    height: 2rem;
    padding: 0 .8rem 0 1.2rem;
    background: #fff;
    justify-content: flex-start;
  }
}

.content {
  border-radius: 10px;
  width: 94%;
  background: #fff;
  margin: .8rem auto;
  padding: .8rem .6rem;
  .ask {
    margin-bottom: 1.2rem;
  }
  .question {
    .item {
      justify-content: flex-start;
      margin-bottom: .6rem;
      span {
        margin-right: .2rem;
        &.ques-btn {
          width: .8rem;
          height: .8rem;
          line-height: .8rem;
          border: 1px solid $blue;
          border-radius: 50%;
          color: $blue;
        }
        &.ques-btn.selected {
          background: $blue;
          color: #fff;
        }
      }
    }
  }
}

</style>

