<template lang="pug">
.anso-menu-container
  el-menu.anso-menu(
    v-bind="$attrs"
    v-on="$listeners"
    ref="menu"
    :background-color="backgroundColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
    :collapse-transition="collapseTransition")
    MenuItem.anso-menu-item(
      v-for="menu in menus"
      v-bind="menu"
      :key="menu.url"
      :data-textcolor="textColor")
</template>

<script>
import MenuItem from './MenuItem'

export default {
  name: 'AppMenu',
  components: {
    MenuItem
  },
  props: {
    menus: {
      type: Array,
      default: () => ([])
    },
    // 是否使用 vue-router 的模式
    // router: {
    //   type: Boolean,
    //   default: false
    // },
    // 菜单背景色
    backgroundColor: {
      type: String,
      default: '#364760'
    },
    // 菜单文字颜色
    textColor: {
      type: String,
      default: '#ffffffd9'
    },
    // 选中菜单的文字颜色
    activeTextColor: {
      type: String,
      default: '#fff'
    },
    // 是否开启折叠动画
    collapseTransition: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  filters: {
  },
  methods: {
  }
}

</script>
<style lang="sass" scoped>
.anso-menu-container
  padding: 0
  height: 100%
  overflow: auto
  overflow-x: hidden
  .anso-menu
    border: none
    ::v-deep .anso-menu-title
      display: inline-block
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
</style>
