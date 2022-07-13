<template>
  <div>
    <div class="dingbu">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        disabled
      >
        <template #label>
          <div class="dizhi">
            <span> 北京</span><van-icon name="arrow-down" />
          </div>
        </template>
        <template #action>
          <div class="dizhibiao">
            <van-icon name="user-o" />
          </div>
        </template>
      </van-search>
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <van-grid class="sige">
      <van-grid-item icon="wap-home-o" text="整租" />
      <van-grid-item icon="friends-o" text="合租" />
      <van-grid-item icon="location-o" text="地图找房" />
      <van-grid-item icon="cash-back-record" text="去出租" />
    </van-grid>
    <div class="xiaobiaoti">
      <h3>租房小组</h3>
      <span>更多</span>
    </div>
    <van-grid :gutter="10" direction="horizontal" :column-num="2">
      <van-grid-item v-for="value in 4" :key="value" icon="photo-o" class="sizu"
        >这一段文字出来没</van-grid-item
      >
    </van-grid>
  </div>
</template>

<script>
import '@/styles/theme.less'
export default {
  created () { },
  data () {
    return {
      value: ''
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.main {
  background-color: #f5f5f5;
}
.my-swipe .van-swipe-item {
  color: #fff;
  height: 424px;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.van-grid {
  height: 244px;
}
/deep/ .van-grid-item__icon {
  font-size: 70px;
  margin-bottom: 30px;
}
/deep/ .van-grid-item__text {
  // margin-top: 20px;f
  font-size: 28px;
}
.xiaobiaoti {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 30px;
  font-size: 28px;
}
.sizu {
  height: 120px;
  font-size: 30px;
}
.sige {
  color: greenyellow;
}
// /deep/ .van-grid-item:last-child {
//   height: 120px;
//   font-size: 30px;
// }
// /deep/ .van-grid-item__content {
//   font-size: 30px;
// }
// 搜索栏
.dingbu {
  width: 100%;
  height: 108px;
  position: fixed;
  z-index: 1;
  padding: 0 15px;
  // margin-bottom: 15px;
  top: 25px;
}
.van-search {
  background-color: rgba(0, 0, 0, 0);
  z-index: 1;
}
.dizhibiao {
  font-size: 40px;
  color: #fff;
}
// .dizhi {
//   width: 130px;
//   height: 68px;
//   // color: #000;
//   padding-left: 20px;
//   background-color: #f7f8fa;
//   font-size: 28px;
//   border: none ;
//   span {
//     width: 100%;
//     height: 68px;
//     line-height: 68px;
//   }
//   /deep/ .van-icon {
//     width: 20px !important;

//     z-index: 2;
//   }
// }
</style>
