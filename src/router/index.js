import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

//获取原型对象上的push函数
const originalReplace = VueRouter.prototype.replace
//修改原型对象中的push方法
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}
/*const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}*/

//懒加载
const Home = () => import('views/home/Home.vue');
const Category = () => import('views/category/Category.vue');
const ShopCart = () => import('views/shopCart/ShopCart.vue');
const Profile = () => import('views/profile/Profile.vue');
const routes = [//配置映射关系
  {
    path:'',
    redirect:'/home',
    meta:{
      title:'首页'
    }
  },
  {
    path:'/home',
    component:Home,
    meta:{
      title:'首页'
    }
  },
  {
    path:'/category',
    component:Category,
    meta:{
      title:'分类'
    }
  },
  {
    path:'/shopCart',
    component:ShopCart,
    meta:{
      title:'购物车'
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      title:'我的'
    }
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

//导航守卫：动态改变title标题
router.beforeEach((to,from,next)=>{
  document.title = to.matched[0].meta.title;
  // console.log(to);
  next();
})

export default router;
