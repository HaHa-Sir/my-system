<template lang="pug">
.slide-collaspe-button(@click="handelClick", :is-collapse="collapse")
  i.iconfont(
    :style="style"
    :class="collapse ? spreadIcon : collapseIcon")
</template>

<script>
export default {
  name: 'MenuFooter',
  props: {
    collapse: {
      type: Boolean,
      default: false
    },
    // 折叠菜单的icon
    collapseIcon: {
      type: String,
      default: 'el-icon-s-fold'
    },
    // 展开菜单的icon
    spreadIcon: {
      type: String,
      default: 'el-icon-s-unfold'
    },
    iconWidth: {
      type: String,
      default: '20px'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    style () {
      return {
        width: this.iconWidth,
        height: this.iconWidth
      }
    }
  },
  methods: {
    handelClick () {
      this.$emit('toggleCollapse')
    }
  }
}

</script>
<style lang="sass" scoped>
.slide-collaspe-button
  width: 44px
  height: 100%
  text-align: center
  cursor: pointer
.slide-collaspe-button[is-collapse]
  background-color: #0a111a
</style>
