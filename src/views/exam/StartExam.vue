<template>
  <div class="exam-wrap bg">
    <NavBar :title="title"></NavBar>
    <div class="banner">
      <img @click="goMain" src="../../assets/images/examBanner@2x.png" alt="">
    </div>
    <div class="info">
      <div class="item flex">
        <span class="title">真实姓名</span>
        <div class="content">
          <input type="text" placeholder="请输入">
        </div>
      </div>
      <div class="item flex">
        <span class="title">身份证号</span>
        <div class="content">
          <input type="text" placeholder="请输入身份证号">
        </div>
      </div>
      <div class="item flex">
        <span class="title">申请城市</span>
        <div class="content">
          <input type="text" v-model="applyCity" placeholder="选择城市" @click="changeCity">
        </div>
      </div>
    </div>
    <div class="flex btn-panel">
      <router-link to="/inExam" class="start"></router-link>
      <p class="des">
        考试时间<span>90</span>分钟，共<span>10</span>个单选题，每题<span>10</span>分
      </p>
    </div>

    <van-popup v-model="show" position="bottom">
      <van-picker 
        :columns="columns" 
        @change="onChange" 
        show-toolbar
        title="选择城市"
        @cancel="onCancel"
        @confirm="onConfirm"/>
    </van-popup>
  </div>
</template>

<script>
import NavBar from '@/components/navBar/NavBar'
const citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州']
};

export default {
  data() {
    return {
      title: '开始考试',
      leftText: '返回',
      rightText: '',
      show: false,
      applyCity: '',
      columns: [
        {
          values: Object.keys(citys),
          className: 'column1'
        },
        {
          values: citys['浙江'],
          className: 'column2',
          defaultIndex: 2
        }
      ]
    }
  },
  components: {
    NavBar
  },
  methods: {
    changeCity() {
      this.show = true
    },
    onChange(picker, values) {
      picker.setColumnValues(1, citys[values[0]])
    },
    onCancel() {
      this.show = false
    },
    onConfirm(value, index) {
      this.applyCity = value.join(' ')
      this.show = false
    },
    goMain() {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.exam-wrap {
  .banner {
    @include wh(100%, 191px);
    img {
      @include wh(100%, 100%);
    }
  }

  .info {
    font-size: .5rem;
    padding: 0 .4rem .4rem;
    background: #fff;
    .item {
      height: 1.6rem;
      border-bottom: 1px solid #ebebeb;
      .title {
        font-size: .5rem;
      }
      .content {
        font-size: .4rem;
        width: 64%;
      }
    }
  }
  .btn-panel {
    flex-direction: column;
    justify-content: center;
    height: 5rem;
    background: #fff;
    .start {
      @include wh(250px, 40px);
      margin-bottom: 10px;
      @include bis('../../assets/images/examBtn@2x.png')
    }
    .des {
      @include sc(12px, #727272);
      span {
        color: #2B77FE
      }
    }
  }
}
</style>

