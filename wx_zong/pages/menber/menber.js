//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
      motto: '点下有惊喜哟！',
    userInfo: {}
  },
  //事件处理函数
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }, alertModel: function (){
    
      wx.showModal({
          title: '告白词',
          content: '鸭子，我爱你！爱死你了！！！木啊，么么哒',
          success: function (res) {
              if (res.confirm) {
                  console.log('告白成功')
              }
          }
      })
  }
})
