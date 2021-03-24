<template>
<div class="app-logo">
  <span>{{title}}</span>
</div>
</template>

<script>

export default {
  name: 'AppLogo',
  props: {
    title: {
      type: String,
      default: 'logo'
    }
  }
}
</script>

<style lang="sass" scoped>
.app-logo
  width: 145px
  height: 28px
  line-height: 28px
  opacity: 1
  background: rgba(255,255,255,0.20)
  text-align: center
</style>
