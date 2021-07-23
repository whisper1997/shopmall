<template>
  <div id="home">
    <nav-bar id="home-nav">
      <div slot="center">蘑菇街</div>
    </nav-bar>
    <home-swiper :banners="banners" class="home-swiper-pad"></home-swiper>
    <home-recommend :recommends="recommends" />
    <feature-view></feature-view>
    <tab-control :titles="titles" />
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommend from './childComps/HomeRecommend'
  import FeatureView from './childComps/FeatureView'

  import NavBar from 'components/common/navbar/NavBar.vue'
  import TabControl from 'components/content/tabControl/TabControl.vue'

  import {getHomeMultidata} from 'network/home.js'
  export default {
    name: "Home",
    components:{
      HomeSwiper,
      HomeRecommend,
      FeatureView,
      NavBar,
      TabControl
    },
    data(){
      return {
        banners:[],
        recommends:[],
        titles:['流行','新款','精选']
        // result:null
      }
    },
    created(){
      //请求多个数据
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
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
    top: 0;*/
  }
  .home-swiper-pad{
    padding-top: 44px;
  }
</style>
