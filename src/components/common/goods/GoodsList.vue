<template>
  <div class="goods">
    <goods-list-item v-for="(item,id) in goods" :goodsItem = "item" :key="id"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    /*align-items: center;*/
    justify-content: center;
  }
</style>
