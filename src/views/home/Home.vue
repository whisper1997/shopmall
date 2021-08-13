<template>
  <div id="home">
    <nav-bar id="home-nav">
      <div slot="center">蘑菇街</div>
    </nav-bar>
    <home-swiper :banners="banners" class="home-swiper-pad"></home-swiper>
    <home-recommend :recommends="recommends" />
    <feature-view></feature-view>
    <tab-control class="tab-control"
                 :titles="titles"
                 @tabClick="tabClick"
    />
    <goods-list :goods = "goods[goodsType].list"></goods-list>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommend from './childComps/HomeRecommend'
  import FeatureView from './childComps/FeatureView'

  import NavBar from 'components/common/navbar/NavBar.vue'
  import TabControl from 'components/content/tabControl/TabControl.vue'
  import GoodsList from 'components/common/goods/GoodsList.vue'

  import {getHomeMultidata,getHomeGoods} from 'network/home.js'
  export default {
    name: "Home",
    components:{
      HomeSwiper,
      HomeRecommend,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList
    },
    data(){
      return {
        banners:[],
        recommends:[],
        titles:['流行','新款','精选'],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        goodsType:'pop'
        // result:null
      }
    },
    created(){
      //请求多个数据
      this.getHomeMultidata();
      //请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods:{
      /*
      * 监听事件方法
      * */
      tabClick(index){
        // console.log(index);
        switch (index) {
          case 0:
            this.goodsType = 'pop';
            break;
          case 1:
            this.goodsType = 'new';
            break;
          case 2:
            this.goodsType = 'sell';
            break;
        }
      },

      /*
      * 网络请求方法
      * */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type){//请求商品数据
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page ++;
        })
      }


    }
  }
</script>

<style scoped>
  #home{
    padding-bottom: 49px;
  }
  #home-nav{
    background-color: var(--color-tint);
    color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    /*padding-top: 44px;*/
    /*position: sticky;
    position: -webkit-sticky; !* Safari *!
    top: 0;
    z-index: 10;*/
  }
  .home-swiper-pad{
    padding-top: 44px;
  }
  .tab-control{
    position: sticky;
    top: 44px;
    z-index: 10;
  }
</style>
