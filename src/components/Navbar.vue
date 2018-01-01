<style lang="stylus">
.navbar
  color white
  display flex
  justify-content space-between
  align-items center
  .wrap
    height 100%
  .navbar__item
    cursor pointer
    display inline-block
    height 100%
    transition 0.8s
    padding 0 30px
    &:hover
      background #566f95
    &::after, .navbar__item__text
      display inline-block
      vertical-align middle
    &::after
      content ''
      height 100%
  .active
    background #566f95
  .logout
    color white
    display inline-block
    vertical-align middle
</style>


<template lang="pug">
.navbar(:style="{height: `${height}px`, backgroundColor: bgColor}")
  .wrap
    router-link.navbar__item(
      v-for="(item, index) of items"
      v-if="!item.privilege || item.privilege >= admin.privilege"
      :class="{ active: isActive(item) }",
      :to="item.path",
      :key="index",
      tag="div"
    )
      .navbar__item__text {{ item.content }}
  .navbar__item
    .navbar__item__text {{ admin.username }}
  .navbar__item(@click="logoutToDo")
    .navbar__item__text 登出
</template>


<script>
export default {
  props: {
    items: Array,
    height: {
      type: Number,
      default: 50,
    },
    bgColor: {
      type: String,
      default: '#324157',
    },
    admin: {
      type: Object,
    },
  },
  methods: {
    logoutToDo() {
      this.$confirm('此操作将退出管理员登录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        localStorage.removeItem('mulab-token')
        this.$router.push('/login')
      })
    },
    isActive(item) {
      const path = this.$route.fullPath.split('/')
      return path.length >= 3 && path[2] === item.path.split('/')[2]
    },
  },
}
</script>
