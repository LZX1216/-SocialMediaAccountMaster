Page({
  data:{
    contents:"contents"
  },
  onLoad:function(){
    var that=this
    wx.request({
     url: 'https://api.ixiaowai.cn/api/ylapi.php',
     data: {
    
     },
     method:'GET',
     header:{
    
     },
  
    success: function(res) {
      console.log(res.data),
      that.setData({
        "contents":res.data
      })
    },
   })
  },

  //刷新
  renew:function(){
    this.setData({contens:" "})
    this.onLoad()
  },

  //复制
  copy:function(){
    var x=this.data.contents
    wx.setClipboardData({
      data: x,
    })
  }
})