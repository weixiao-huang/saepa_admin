<style lang="stylus" scoped>
.layout
  height calc(100vh - 50px)
  .wrap
    overflow hidden
    background #e5e9f2
    width 100%
    padding-left 20%
    &::after
      display inline-block
      vertical-align middle
      content ''
      height 100%
  .left-side
    width 20%
    text-align center
    margin-left -100%
  .wrap, .left-side
    height 100%
    float left
  .wrap > div, .left-side > div
    height 100%
</style>


<template lang="pug">
.layout
  .wrap
    slot
  .left-side
    slot(name="left-side")
</template>
