<template lang="pug">
//- #tags-view-container.tags-view-container
//-   scroll-pane.tags-view-wrapper(ref="scrollPane")
//-     router-link.el-tag.tags-view-item(
//-       v-for="tag in visitedViews"
//-       ref="tag"
//-       tag="span"
//-       :key="tag.path"
//-       :class="isActive(tag)?'':'el-tag--info'"
//-       :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
//-       @click.middle.native="!isAffix(tag)?closeSelectedTag(tag):''"
//-       @contextmenu.prevent.native="openMenu(tag,$event)") {{ tag.title }}
//-       span.icon-close.el-tag__close.el-icon-close(
//-         v-if="!isAffix(tag)&&visitedViews.length>1"
//-         @click.prevent.stop="closeSelectedTag(tag)")
//-   ul.el-dropdown-menu.el-dropdown-menu--small(
//-     v-show="visible"
//-     :style="{left:left+'px',top:top+'px'}")
//-     li.el-dropdown-menu__item(v-if="!isAffix(selectedTag)",@click="closeSelectedTag(selectedTag)") 关闭
//-     li.el-dropdown-menu__item(@click="closeOthersTags") 关闭其它页面
</template>

<script>
// import ScrollPane from './ScrollPane'
// import { routeDataFormat } from '@/utils/routeDataFormat.js'

export default {
  name: 'TagsView',
  // components: { ScrollPane },
  data () {
    return {
      visible: false,
      top: 0,
      left: 0,
      selectedTag: {},
      affixTags: []
    }
  },
  computed: {
    // visitedViews () {
    //   return this.$store.state?.tagsView?.visitedViews || []
    // }
  },
  watch: {
    // $route (route) {
    //   if (!(/login$/.test(route.path))) {
    //     this.addCurTags()
    //     this.moveToCurrentTag()
    //   }
    // },
    // visible (value) {
    //   if (value) {
    //     document.body.addEventListener('click', this.closeMenu)
    //   } else {
    //     document.body.removeEventListener('click', this.closeMenu)
    //   }
    // }
  },
  mounted () {
    // const existedTag = this.checkExistTags()
    // if (existedTag && existedTag.length) {
    //   this.resetExistTag(existedTag)
    //   // 页面刷新后，若路由不存在于tag中，则增加tag
    //   if (!existedTag.find(tag => tag.path === this.$route.path)) this.addCurTags()
    // } else {
    //   this.addCurTags()
    // }
  },
  methods: {
    // isActive (route) {
    //   return route.path === this.$route.path
    // },
    // isAffix (tag) {
    //   return tag.meta && tag.meta.affix
    // },
    // checkExistTags () {
    //   const existedTags = JSON.parse(sessionStorage.getItem('PAGE_TAGS')) || []
    //   return existedTags.filter(tag => {
    //     // tag.title !== 'no-name' || !tag
    //     if (tag) {
    //       return tag.title !== 'no-name'
    //     } else {
    //       return false
    //     }
    //   })
    // },
    // resetExistTag (tags) {
    //   this.$store.commit('tagsView/INIT_VIEW', tags)
    // },
    // addCurTags () {
    //   const { path } = this.$route
    //   if (path) {
    //     const routeData = this.setStoreRouteData()
    //     this.$store.dispatch('tagsView/addView', routeData)
    //     sessionStorage.setItem('PAGE_TAGS', JSON.stringify(this.visitedViews))
    //   }
    // },
    // setStoreRouteData () {
    //   return routeDataFormat(this.$route)
    // },
    // moveToCurrentTag () {
    //   const tags = this.$refs.tag || []
    //   this.$nextTick(() => {
    //     const routeData = this.setStoreRouteData()
    //     for (const tag of tags) {
    //       if (tag.to.path === this.$route.path) {
    //         this.$refs.scrollPane.moveToTarget(tag)
    //         // when query is different then update
    //         if (tag.to.fullPath !== this.$route.fullPath) {
    //           this.$store.dispatch('tagsView/updateVisitedView', routeData)
    //         }
    //         break
    //       }
    //     }
    //   })
    // },
    // closeSelectedTag (view) {
    //   this.$store.dispatch('tagsView/delView', view).then(({ visitedViews }) => {
    //     if (this.isActive(view)) {
    //       this.toLastView(visitedViews, view)
    //     } else {
    //       sessionStorage.setItem('PAGE_TAGS', JSON.stringify(this.visitedViews))
    //     }
    //   })
    // },
    // closeOthersTags () {
    //   this.$router.push(this.selectedTag)
    //   this.$store.dispatch('tagsView/delOthersViews', this.selectedTag).then(() => {
    //     this.moveToCurrentTag()
    //   })
    // },
    // toLastView (visitedViews, view) {
    //   const latestView = visitedViews.slice(-1)[0]
    //   if (latestView) {
    //     this.$router.push(latestView.fullPath)
    //   } else {
    //     // now the default is to redirect to the home page if there is no tags-view,
    //     // you can adjust it according to your needs.
    //     if (view.name === 'Dashboard') {
    //       // to reload home page
    //       this.$router.replace({ path: '/redirect' + view.fullPath })
    //     } else {
    //       this.$router.push('/')
    //     }
    //   }
    // },
    // openMenu (tag, e) {
    //   const menuMinWidth = this.$store.state.menu.width
    //   const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
    //   const offsetWidth = this.$el.offsetWidth // container width
    //   const maxLeft = offsetWidth - menuMinWidth // left boundary
    //   const left = e.clientX - offsetLeft + 15 // 15: margin right

    //   if (left > maxLeft) {
    //     this.left = maxLeft
    //   } else {
    //     this.left = left
    //   }

    //   this.top = e.offsetY
    //   this.visible = true
    //   this.selectedTag = tag
    // },
    // closeMenu () {
    //   this.visible = false
    // }
  }
}
</script>

<style lang="sass" scoped>
// @import 'src/assets/css/var.sass'
// .tags-view-container
//   width: 100%
//   background: #fff
//   border-bottom: 1px solid rgba(0, 0, 0, 0.05)
//   flex: 1
//   position: relative
//   .tags-view-wrapper
//     .el-tag
//       background-color: #fff
//     .tags-view-item
//       padding: 0 15px
//       cursor: pointer
//       border: 0
//       border-radius: 0
//       line-height: 32px
//       color: $--color-info
//       background-color: #fff
//       border-right: 1px solid $--divider-color
//       &.router-link-active
//         position: relative
//         background-color: #eee !important
//         border: none !important
//     .icon-close
//       margin-left: 8px
</style>
