<template lang="pug">
el-container#app-frame(direction='vertical')
  TopBar
  el-container(style="height: calc(100% - 60px)")
    el-main#app-main
      el-container(direction='vertical')
        //- .tagsViewContainer
        //-   TagsView.tagsview
        el-main.viewRouterContainer
          keep-alive
            #container 
              router-view(:key='key')
</template>

<script>
import TopBar from './TopBar'
import SideBar from './SlideBar'
import TagsView from './TagsView'

export default {
  name: 'AppFrame',
  components: {
    TopBar,
    SideBar,
    TagsView
  },
  data () {
    return {
      menus: [{
        label: '测试', url: '1', children: []
      }],
      moduleMenus: [{
        label: '测试', url: '1'
      }]
    }
  },
  computed: {
    key () {
      return this.$route.path
    }
  },
  methods: {
    getModuleSelect (cur) {
      this.menuTitleConfig.label = cur.label
    },
    clearFrame () {
      this.menus = []
    }
  },
  mounted () {
    // this.menus = menus()
  }
}

</script>
<style lang="sass" scoped>
#app-frame
  width: 100%
  height: 100%
#app-main
  padding: 0
  background-color: #ECEFF0
  .viewRouterContainer
    // background-color: #fff
    margin: 8px
    padding: 0
</style>
