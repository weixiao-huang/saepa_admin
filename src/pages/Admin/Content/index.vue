<template lang="pug">
layout#content
  wrap-layout
    div(slot="header") header
    router-view
  sidebar(slot="left-side", :items="sidebarItems")
</template>


<script>
import Layout from '@/components/Layout'
import WrapLayout from '@/components/WrapLayout'
import Sidebar from '@/components/Sidebar'

export default {
  data() {
    return {
      sidebarItems: [
        { content: '主页', path: 'home' },
        { content: '项目介绍', path: 'projects' },
        { content: '关于我们', path: 'aboutus' },
      ],
    }
  },
  components: {
    Layout,
    WrapLayout,
    Sidebar,
  },
}
</script>
