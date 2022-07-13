<template>
  <van-picker
    show-toolbar
    :columns="columns"
    v-if="flag === 0"
    toolbar-position="bottom"
  >
    <!-- <template #default>
      <div></div>
    </template> -->
  </van-picker>
</template>

<script>
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
      columns: [
        {
          text: '浙江',
          children: [
            {
              text: '杭州',
              children: [{ text: '西湖区' }, { text: '余杭区' }]
            },
            {
              text: '温州',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            }
          ]
        },
        {
          text: '福建',
          children: [
            {
              text: '福州',
              children: [{ text: '鼓楼区' }, { text: '台江区' }]
            },
            {
              text: '厦门',
              children: [{ text: '思明区' }, { text: '海沧区' }]
            }
          ]
        }
      ]

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

</style>
