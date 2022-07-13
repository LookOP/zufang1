<template>
  <div>
    <!-- 上面搜索栏 -->
    <van-search
      show-action
      background="yellowgreen"
      placeholder="请输入搜索关键词"
      disabled
    >
      <!-- 地址插槽 -->
      <template #label>
        <span>北京</span
        ><van-icon
          name="arrow-down"
          class="searchzuo"
          style="margin: 0 10px 0 5px"
        />
      </template>
      <!-- 最左侧返回插槽 -->
      <template #left>
        <van-icon name="arrow-left" style="margin-right: 20px" color="#fff" />
      </template>
      <!-- 右侧框外图标 -->
      <template #action>
        <van-icon
          name="user-o"
          color="#fff"
          size="23px"
          style="margin: 0 15px 0 5px"
        />
      </template>
    </van-search>
    <!-- 上面搜索栏 -->
    <!-- 搜索栏下导航s -->
    <!-- <div class="nav_top">
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div> -->
    <van-row>
      <van-col
        span="6"
        :class="index === flag ? 'navcolor' : ''"
        v-for="(item, index) in list"
        :key="index"
        @click="navCol(index)"
      >
        区域 <van-icon name="arrow-down"
      /></van-col>
      <div @click="showPopup" :class="flag === 4 ? 'navcolor' : ''">弹出层</div>
    </van-row>
    <OnePick :flag="flag"></OnePick>
    <TwoPick :flag="flag"></TwoPick>
    <ThreePick :flag="flag"></ThreePick>
    <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
    <van-popup v-model="show" position="right">
      <ForePick></ForePick>
    </van-popup>

    <!-- <van-cell is-link @click="showPopup"  close-on-click-overlay
      >展示弹出层
      <van-popup v-model="show" position="top" :style="{ height: '30%' }">
        tanchu
        <van-picker show-toolbar title="标题" :columns="columns" />
      </van-popup>
    </van-cell> -->
    <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="show">内容</van-popup> -->
    <!-- 搜索栏下导航e -->
    <!-- 房子部分s -->
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      v-for="(item, index) in list1"
      :key="index"
    >
      <template #tags>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </template>
    </van-card>
    <!-- 房子部分e -->
  </div>
</template>

<script>
import OnePick from '@/views/Search/commponents/OnePick'
import TwoPick from '@/views/Search/commponents/TwoPick'
import ThreePick from '@/views/Search/commponents/ThreePick'
import ForePick from '@/views/Search/commponents/ForePick'
export default {
  created () { },
  data () {
    return {

      show: false,
      list: [1, 2, 3],
      list1: [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      flag: 0
    }
  },
  methods: {
    showPopup () {
      this.show = true
      this.flag = 4
    },
    navCol (i) {
      this.flag = i
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { OnePick, TwoPick, ThreePick, ForePick }
}
</script>

<style scoped lang='less'>
/deep/ .van-icon-search {
  margin-left: 10px;
  &::before {
    padding-left: 20px;
    border-left: 1px solid #333;
    height: 30px;
    line-height: 30px;
  }
}
// .tanchu {
//   margin-top: 180px;
// }
// .nav_top ul{
//   display: flex;
//   justify-content: space-between;
// }
.van-col {
  text-align: center;
}
.navcolor {
  color: greenyellow;
}

//弹出框下面取消和确认
/deep/ .van-picker {
  background-color: #f5f5f9;
}
/deep/ .van-picker__toolbar {
  justify-content: space-between;
  .van-picker__cancel {
    display: block;
    width: 30%;
    height: 100px;
    background-color: #fff;
    color: green;
    font-size: 37px;
  }
  .van-picker__confirm {
    display: block;
    width: 70%;
    height: 100px;
    color: #fff;
    font-size: 37px;
    background-color: rgb(123, 232, 123);
  }
}
.van-popup {
  height: 100%;
  width: 75%;
}
</style>
