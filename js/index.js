// 更新：
// 05.27: 1、保证回调执行顺序：error > ready > load；2、回调函数this指向img本身
// 04-02: 1、增加图片完全加载后的回调 2、提高性能

/**
 * 图片头数据加载就绪事件 - 更快获取图片尺寸
 * @version    2011.05.27
 * @author    TangBin
 * @see        http://www.planeart.cn/?p=1121
 * @param    {String}    图片路径
 * @param    {Function}    尺寸就绪
 * @param    {Function}    加载完毕 (可选)
 * @param    {Function}    加载错误 (可选)
 * @example imgReady('http://www.google.com.hk/intl/zh-CN/images/logo_cn.png', function () {
        alert('size ready: width=' + this.width + '; height=' + this.height);
    });
 */
var i
    //微传单
define(['jquery'],function($){
    var state = {
        'dataId': 1,
        'canTouch':1,//是否可点击 可滚动;
        'isOnTouchStart':0
    }
    var index = function(){

    }

    index.prototype = {
      init:function(){

      }
    }
     
   
     return{
        index:index
     };
})

