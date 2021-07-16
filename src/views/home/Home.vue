<template>
  <div id="home">
    <nav-bar id="home-nav">
      <div slot="left"></div>
      <div slot="center">蘑菇街</div>
      <div slot="right"></div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  export default {
    name: "Home",
    components:{
      NavBar
    }
  }
</script>

<style scoped>
 #home-nav{
   background-color: var(--color-tint);
   color: #ffffff;
 }
</style>
