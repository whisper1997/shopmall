import {request} from "./request";
//{request}是因为request文件导出不是export default，default导出可以不加{}

export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}


