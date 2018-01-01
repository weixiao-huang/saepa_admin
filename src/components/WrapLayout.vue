<style lang="stylus" scoped>
.wrap-layout
  display inline-block
  vertical-align middle
  width 100%
  background #e5e9f2
  padding 0 15px
  padding-top 10px
  height calc(100% - 20px)
  overflow hidden
  .header > div
    margin-bottom 10px
    display flex
    justify-content space-between
    align-items center
  .wrap
    padding-bottom 20px
    height 100%
    // overflow scroll
  .wrap > div
    background white
    height calc(100% - 30px)
    overflow scroll
</style>


<template lang="pug">
.wrap-layout
  .header
    slot(name="header")
  .wrap
    slot
</template>
