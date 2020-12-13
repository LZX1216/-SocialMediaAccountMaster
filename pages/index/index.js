Page({

 //文案
 wa:function(options){
  wx.navigateTo({
    url:'/pages/wa/wa'
  })
 },

 //图片
 tp:function(options){
  wx.navigateTo({
    url:'/pages/tp/tp'
  })
 },

 //头像
 tx:function(options){
  wx.navigateTo({
    url:'/pages/tx/tx'
  })
 },

 //新手指引
 directions:function(options){
   wx.navigateTo({
     url: '/pages/directions/directions',
   })
 }
})
