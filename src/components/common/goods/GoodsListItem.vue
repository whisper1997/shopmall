<template>
  <div class="goods_list_item">
    <img :src="goodsItem.show.img" alt="">
    <div class="goods_info">
      <p class="title">{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {};
        }
      }
    }
  }
</script>

<style scoped>
  .goods_list_item{
    /*display: flex;*/
    /*float: left;*/
    width: 48%;
    position: relative;
    padding-bottom: 40px;
    margin: 0 2px;
  }

  .goods_list_item img{
    width: 100%;
    border-radius: 6px;
  }

  .goods_list_item .goods_info{
    /*width: 48%;*/
    padding:2px;
    font-size: 12px;
    text-align: center;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
  }

  .goods_info .title{
    margin-bottom: 2px;
    white-space:nowrap;/* 规定文本是否折行 */
    overflow: hidden;/* 规定超出内容宽度的元素隐藏 */
    text-overflow: ellipsis;
    /* 规定超出的内容文本省略号显示，通常跟上面的属性连用，因为没有上面的属性不会触发超出规定的内容 */
  }

  .goods_info .price{
    margin-right: 20px;
    color: var(--color-high-text);
  }

  .goods_info .collect{
    position: relative;
  }

  .goods_info .collect::before{
    content: '';
    width: 14px;
    height: 14px;
    position: absolute;
    top: -1px;
    left: -15px;
    background: url("~assets/image/common/collect.svg") 0 0/14px 14px;
  }
</style>
