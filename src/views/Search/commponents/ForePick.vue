<template>
  <div>
    <dl>
      <dt>户型</dt>
      <dd>
        <span>一室</span>
        <span>2室</span>
        <span>3室</span>
        <span>4室</span>
        <span>4室+</span>
      </dd>
      <dt>朝向</dt>
      <dd>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>11</span>
        <span>22</span>
        <span>33</span>
        <span>33</span>
      </dd>
      <dt>楼层</dt>
      <dd>
        <span>高楼层</span>
        <span>高楼层</span>
        <span>高楼层</span>
      </dd>
      <dt>房屋狼点</dt>
      <dd>
        <span>独立卫生间</span>
        <span>随时看房</span>
        <span>一屋陪玩</span>
        <span>一屋陪玩</span>
        <span>一屋陪玩</span>
        <span>一屋陪玩</span>
        <span>一屋陪玩</span>
        <span>一屋陪玩</span>
        <span>一屋陪玩</span>
        <span>一屋陪玩</span>
      </dd>
    </dl>
    <div class="footer">
      <div class="left">清除</div>
      <div class="right">确定</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
  },
  created () { },
  data () {
    return {

    }
  },
  methods: {
  },
  computed: {},
  watch: {
  },
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
dl {
  margin: 28px 0;
  padding: 0 30px;
}
dt {
  font-size: 35px;
  margin: 20px 0;
}
dd {
  margin: 0 0 0 80px;
  padding: 0 0 28px;
}
span {
  display: inline-block;
  width: 140px;
  height: 64px;
  margin: 0 36px 30px 0;
  border: 1px solid #ddd;
  text-align: center;
  line-height: 64px;
  font-size: 24px;
}
</style>
