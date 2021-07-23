<template>
  <div id="homerecommend">
    <div v-for="(item,sort) in recommends" :key="sort" class="recommend_item">
      <a :href="item.link">
        <img :src="item.image" alt="">
<!--        <a :href="item.link" class="recommend_title">{{item.title}}</a>-->
        <p >{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props:{
      recommends:{
        type:Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  #homerecommend{
    display: flex;
    width: 100%;
    /*height: 100px;*/
    /*line-height: 100px;*/
    text-align: center;
    font-size: 13px;
    padding: 12px 0 15px;
    border-bottom: 8px solid #eee;

  }
  .recommend_item{
    flex: 1;
    float: left;
  }
  .recommend_item img{
    width:70px;
    height: 70px;
    margin-bottom: 8px;
  }
</style>
