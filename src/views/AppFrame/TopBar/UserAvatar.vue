<template  lang="pug">
.currentUser(
  @mouseover="showUserInfo=true"
  @mouseout="showUserInfo=false")
  el-avatar(
    size="small"
    :src="userImg"
    @error="userImgErrorHandler")
    img(src="@/assets/img/user.jpg")
  span.userMore
    i.el-icon-arrow-down
  el-collapse-transition
      #user-menu.user-menu(v-show="showUserInfo")
        .user-info
          el-avatar.user-head(
            :size='90'
            :src="userImg"
            @error="userImgErrorHandler")
            img(src="@/assets/img/user.jpg")
          .user-name {{userName || '匿名用户'}}
        .user-btns
          .user-btn(
            v-for="(button, index) in buttonList"
            :key="index"
            @click="button.func")
            component(
              v-if="button.icon"
              :is="showAnsoIcon(button.icon) ? 'AnsoIcon' : 'i'"
              :class="[button.icon]"
              width="50px"
              height="50px"
              :icon="showAnsoIcon(button.icon) ? button.icon : false")
            //- i.iconfont(
            //-   v-if="button.icon"
            //-   :class="[button.icon]")
            .btn-label {{button.label}}
</template>

<script>

export default {
  name: 'UserAvatar',
  components: {
  },
  props: {
    // 用户头像
    userImg: {
      type: String,
      default: ''
    },
    // 用户名
    userName: {
      type: String,
      default: ''
    },
    buttonList: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      showUserInfo: false
    }
  },
  methods: {
    showAnsoIcon (icon = '') {
      return !icon.split('-').includes('el')
    },
    // 若没有userImg，则使用user.jpg作为头像
    userImgErrorHandler () {
      return this.userImg
    }
  },
  mounted () {
  }
}
</script>

<style lang="sass" scoped>
@import 'src/assets/css/var.sass'
.currentUser
  display: flex
  align-items: center
  .userMore
    font-size: 7px
    margin-left: 5px
  .user-menu
    width: 230px
    overflow: hidden
    position: absolute
    right: 0px
    top: 48px
    background-color: #191c21
    z-index: $--zindex-middle
    transition: all 0.5s
    .user-info
      width: 100%
      text-align: center
      .user-head
        margin-top: 20px
      .user-name
        text-align: center
        margin-top: 10px
        font-size: 16px
  .user-btns
    padding: 10px
    display: flex
    color: #aaabac
    .user-btn
      flex: 1
      cursor: pointer
      display: flex
      flex-direction: column
      align-items: center
      &:hover
        color: #fff
      i
        width: 100%
        font-size: 33px
        height: 50px
        line-height: 55px
        text-align: center
      .btn-label
        text-align: center
</style>
