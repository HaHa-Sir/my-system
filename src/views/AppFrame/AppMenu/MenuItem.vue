<template lang="pug">
el-submenu(v-if="children && children.length > 0"
  :index="url"
  :title="label")
  template(slot="title")
    .anso-menu-title
      span.menu-title-label {{label}}
  MenuItem(
    v-for="menu in children"
    :key="menu.url"
    v-bind="menu")
el-menu-item(
  v-else
  :index="url"
  :title="label")
  template(slot="title")
    a.anso-menu-title.menu-title-label(:href="url|filterHref") {{label}}
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    label: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    children: {
      type: Array
    }
  },
  data () {
    return {}
  },
  filters: {
    filterHref (url) {
      return `/#${url}`
    }
  }
}

</script>
<style lang="sass" scoped>
.anso-menu-title
  display: flex
  align-items: center
  .anso-icon+.menu-title-label
    margin-left: 4px
a.menu-title-label
  text-decoration: none
  color: currentcolor
</style>
