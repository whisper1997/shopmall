module.exports = {
  configureWebpack:{
    resolve:{
      alias:{//配置路径映射关系，运用时不用再写../,直接写名字即可
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
