<template>
  <div>
    12
  </div>
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
      show: this.flag === 3
    }
  },
  methods: {
    showPopup () {
      this.show = true
    }
  },
  computed: {},
  watch: {
  },
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
