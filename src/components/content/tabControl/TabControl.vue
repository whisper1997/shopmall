<template>
  <div class="tab_control">
    <div v-for="(item,index) in titles" :key="index"
         class="tab_control_item"
         :class="{active: index === currentIndex}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index ;
        this.$emit('tabClick',this.currentIndex);
      }
    }
  }
</script>

<style scoped>
  .tab_control{
    display: flex;
    width: 100%;
    /*height: 49px;*/
    line-height: 40px;
    background-color: #fff;
  }
  .tab_control_item{
    flex: 1;
    text-align: center;
    /*border-bottom: 3px solid var(--color-tint);*/
  }
  .tab_control_item span{
    padding: 5px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    width: 100px;
    border-bottom: 3px solid var(--color-tint);
  }
</style>
