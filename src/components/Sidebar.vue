<style lang="stylus">
.sidebar
  .sidebar__item
    padding 15px 0
    cursor pointer
    transition 0.4s
    &:hover
      background #e1e1e1
  .active
    background #e1e1e1
</style>


<template lang="pug">
.sidebar(:style="{backgroundColor: bgColor}")
  router-link.sidebar__item(
    v-for="(item, index) of items",
    :class="{ active: isActive(item) }",
    :to="item.path",
    :key="index",
    tag="div"
  )
    .sidebar__item__text {{ item.content }}
</template>


<script>
export default {
  props: {
    items: Array,
    bgColor: {
      type: String,
      default: '#fafafa',
    },
  },
  methods: {
    isActive(item) {
      const path = this.$route.fullPath.split('/')
      return path.length >= 4 && path[3] === item.path
    },
  },
}
</script>
