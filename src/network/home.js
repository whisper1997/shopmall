import {request} from "./request";
//{request}是因为request文件导出不是export default，default导出可以不加{}

export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}
//获取首页商品数据
export function getHomeGoods(type,page) {
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}



