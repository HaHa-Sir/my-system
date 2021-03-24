<template  lang="pug">
el-header#app-header(height="48px")
  .headerMain
    AppLogo
  UserAvatar(
    v-bind="userInfo")
</template>

<script>
import AppLogo from '@/views/AppFrame/AppLogo.vue'
import AppMenu from '@/views/AppFrame/AppMenu'
import UserAvatar from './UserAvatar'

export default {
  name: 'TopBar',
  components: {
    AppLogo,
    AppMenu,
    UserAvatar
  },
  data () {
    return {
      showUserInfo: false,
      userInfo: {
        // 用户名
        userName: '',
        // 用户头像
        userImg: '',
        buttonList: [{
          label: '退出',
          icon: 'el-icon-switch-button',
          func: () => this.logout()
        }]
      }
    }
  },
  methods: {
    logout () {
      this.$router.push('/loginout')
    }
  },
  mounted () {
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/css/var.sass'
#app-header
  width: 100%
  display: flex
  align-items: center
  justify-content: space-between
  background-color: #222F3F
  font-size: 14px
  color: rgba(255,255,255,0.65)
  z-index: $--zindex-middle
  .headerMain
    display: flex
    align-items: center
    ::v-deep
      .el-divider
        margin: 0 10px
        background-color: rgba(0,0,0,0.80)
      .el-menu-item
        padding: 0 !important
      .el-menu-item+.el-menu-item
        padding-left: 20px !important
</style>
