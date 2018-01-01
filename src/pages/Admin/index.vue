<style lang="stylus" scoped>

</style>


<template lang="pug">
#home
  navbar(:items="navbarItems", :admin="adminInfo")
  router-view
</template>


<script>
import HelloWorld from '@/components/HelloWorld';
import Navbar from '@/components/Navbar';

export default {
  data() {
    return {
      navbarItems: [
        { content: '网页内容管理', path: '/admin/content' },
        { content: '新闻', path: '/admin/news', privilege: 0 },
      ],
      adminInfo: {},
    };
  },
  components: {
    HelloWorld,
    Navbar,
  },
}
</script>
