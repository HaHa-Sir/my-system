<template lang="pug">
#anso-aside(
  :style="style"
  :is-collapse="asideCollapseStatus")
  #slide-head(
    @mouseover='toggleSlide'
    @mouseout='toggleSlide')
    MenuSearch(
      v-bind="$attrs"
      :is-collapse="asideCollapseStatus"
      :placeholder="asideCollapseStatus ? '' : searchPlaceholder"
      :menus="menus"
      @getSearch="getSearch")
  #slide-main(
    @mouseover='toggleSlide'
    @mouseout='toggleSlide')
    AppMenu(
      v-bind="$attrs"
      ref="menu"
      :collapse="false"
      :default-active="defaultActive"
      :menus="treeMenu")
  #slide-footer
    MenuFooter(
      :collapse="isCollapse"
      @toggleCollapse="toggleCollapse")
</template>

<script>
import MenuSearch from './MenuSearch'
import AppMenu from '../AppMenu'
import MenuFooter from './MenuFooter'
import cloneDeep from 'lodash/cloneDeep'

export default {
  name: 'SlideBar',
  components: {
    MenuSearch,
    AppMenu,
    MenuFooter
  },
  props: {
    menus: {
      type: Array,
      default: () => ([])
    },
    searchPlaceholder: {
      type: String,
      default: '请输入关键字查询'
    }
  },
  data () {
    return {
      defaultOpeneds: [],
      // 侧边导航栏折叠状态，true折叠，false展开
      asideCollapseStatus: false,
      // 侧边导航栏是否开启折叠模式；false关闭，true开启
      isCollapse: false,
      // 菜单树
      treeMenu: cloneDeep(this.menus)
    }
  },
  watch: {
    menus: {
      immediate: true,
      handler (menus) {
        this.treeMenu = cloneDeep(menus)
      }
    }
  },
  computed: {
    defaultActive () {
      // const visitedViews = this.$store.state.tagsView.visitedViews
      // const currentView = visitedViews.find(view => view.path === this.$route.fullPath)
      // return currentView ? currentView.path : ''
      return ''
    },
    style () {
      return {
        // width: this.$store.state.menu.width
        width: '187px'
      }
    }
  },
  filters: {
  },
  methods: {
    // 搜索菜单
    getSearch (menus) {
      console.log('menus', menus)
      this.treeMenu = menus ? cloneDeep(menus) : cloneDeep(this.menus)
    },
    // 控制是否开启折叠模式
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
      this.asideCollapseStatus = this.isCollapse
      this.$emit('getCollapseStatus', this.asideCollapseStatus)
      this.$store.commit('menu/toggleWidth', !this.asideCollapseStatus ? '184px' : '45px')
    },
    // 侧边导航栏折叠状态改变（鼠标移入移出）
    toggleSlide () {
      // (开启折叠模式才有效)
      if (this.isCollapse) {
        this.asideCollapseStatus = !this.asideCollapseStatus
        this.$emit('getCollapseStatus', this.asideCollapseStatus)
        this.$store.commit('menu/toggleWidth', !this.asideCollapseStatus ? '184px' : '45px')
      }
    }
  }
}

</script>
<style lang="sass" scoped>
@import 'src/assets/css/var.sass'
#anso-aside
  z-index: $--zindex-low
  height: 100%
  transition: all .2s
  background: #364760
  opacity: 1
  #slide-head
    height: 76px
  #slide-main
    height: calc( 100% - 121px )
    ::v-deep
      .anso-menu-title
        width: calc( 100% - 35px )
      .el-menu-item, .el-submenu__title
        min-width: 0
        padding: 0
  #slide-footer
    z-index: $--zindex-low
    height: 45px
    line-height: 45px
    color: rgba(255,255,255,0.65)
    border-top: 1px solid
    border-top-color: rgba(0,0,0,0.30)
    background: #364760
#anso-aside[is-collapse]
  #slide-main
    ::v-deep
      .anso-icon+.menu-title-label
        display: none
      .el-menu-item,.el-submenu__title
        padding-left: 16px !important
        .anso-menu-title
          width: 25px
        .el-icon-arrow-down
          display: none
</style>
