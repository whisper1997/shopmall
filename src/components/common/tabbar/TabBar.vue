<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
#tab-bar{
  background-color: #f6f6f6;
  display: flex;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>
