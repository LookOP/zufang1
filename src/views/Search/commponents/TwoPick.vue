<template>
  <van-picker
    show-toolbar
    :columns="columns"
    @confirm="onConfirm"
    @cancel="onCancel"
    @change="onChange"
    v-if="flag === 1"
    toolbar-position="bottom"
  />
</template>

<script>
import { Toast } from 'vant'
export default {
  props: {
    flag: {
      type: Number,
      required: true
    }
  },
  created () { },
  data () {
    return {
      columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州']
    }
  },
  methods: {
    onConfirm (value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`)
    },
    onChange (picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`)
    },
    onCancel () {
      Toast('取消')
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
