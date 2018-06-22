// pages/qrcode/index.js
var util = require('../../utils/util.js');
var api = require('../../config/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  scan:function(e){
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        console.log(res.result)
        if (res.errMsg!='scanCode:ok'){
          console.log(res.errMsg)
          return;
        }
        if (res.scanType =='QR_CODE'){
          //result: "http://www.benseds.com"
        }
        if (res.scanType == 'WX_CODE') {
          //path:"pages/index/index?scene=832bb850-2162-4e42-7060796a2fb8"
          //result:"http://lljnySW;-RXmNJCfP_)e9B162-4e42-7060796a2fb8"
          if (!res.path){
            util.showErrorToast(res);
            return;
            var scene=this.getScene(res.path);
            console.log(scene);
          }
        }
        if (res.scanType == 'EAN_13') {
          // result: "6901028183222"
        }
      },
      fail: (err) => {
        console.log(err)
      },
      complete: (res) => {
 //       console.log(res)

      }
    })
  },
  getScene:function(path){
    var res={path:'pages/index/index?scene=832bb850-2162-4e42-7060796a2fb8'};
    var scene=null;
    if(res.path.indexOf('?')!=-1){
        var param=res.path.split('?');
        if(param[1]    && param[1].indexOf('=')!=-1){
            scene=param[1].split('=')[1];            
        }
      }
      return scene;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})