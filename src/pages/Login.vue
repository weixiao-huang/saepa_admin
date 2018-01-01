<style lang="stylus" scoped>
#login
  height 100vh
  display flex
  justify-content center
  align-items center
  .wrap
    display flex
    flex-direction column
    align-items center
    .cover
      width 70%
      img
        width 100%
    .form
      text-align center
      .el-input, .el-button
        padding 3% 0
      .el-button
        width 100%
        margin-top 3%
</style>


<template lang="pug">
#login
  .wrap
    .cover
      img(src="../assets/logo.jpg")
    .form
      el-input(v-model="username", placeholder="用户名", type="text")
      el-input(v-model="password", placeholder="密码", type="password")
      el-button(type="primary", @click="loginToDo") 登录
</template>


<script>
import api from '@/api'

export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async loginToDo() {
      const { data } = await api.getAuthToken(this.username, this.password)
      if (data.status_code) {
        this.$message({
          type: 'error',
          message: data.status_detail,
        })
      } else {
        this.$message({
          type: 'success',
          message: data.info,
        })
        localStorage.setItem('mulab-token', data.token)
        this.$router.push('/admin')
      }
    },
  },
}
</script>
