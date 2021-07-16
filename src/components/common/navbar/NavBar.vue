<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    /*box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.1);*/
    box-shadow:0 1px 1px rgba(100,100,100,0.1)
  }
  .left{
    width: 60px;
    /*background-color: #e70e32;*/
    text-align: center;
  }
  .center{
    /*background-color: greenyellow;*/
    flex: 1;
  /* 出去已设置的宽度其余全部占满*/
    text-align: center;
  }
  .right{
    width: 60px;
    /*background-color: #e70e32;*/
    text-align: center;
  }
</style>
