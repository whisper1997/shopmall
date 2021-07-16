<template>
  <div id="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class={active:isActive}>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String
    },
    /*data(){
      return {
        isActive:true
      }
    },*/
    computed:{
      isActive(){
        return this.$route.path == this.path;
        // return true;
      }
    },
    methods:{
      itemClick(){
        /*console.log(this.path);
        console.log(this.$route.path);*/
        this.$router.replace(this.path);
        // console.log("点击");
      }
    }
  }
</script>

<style scoped>
#tab-bar-item{
  flex: 1;
  height: 49px;
  text-align: center;
}
#tab-bar-item img{
  width: 25px;
  height: 25px;
  display: inline;
}
  .active{
    color: #e70e32;
  }
</style>
