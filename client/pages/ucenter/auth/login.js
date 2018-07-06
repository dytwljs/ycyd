// pages/ucenter/auth/login.js
var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');
var user = require('../../../services/user.js');
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAuthorize:false
  },
  goLogin:function(e){

    user.loginByWeixin().then(res => {
      app.globalData.userInfo = res.data.userInfo;
      app.globalData.token = res.data.token;
      app.globalData.isAuthorize=true;
        wx.navigateBack({        delta: 1     });
      // this.exit();
    }).catch((err) => {
      console.log(err)
      // wx.navigateBack({        delta: 1     });
    });
  },
  // goLogin(){
  //   user.loginByWeixin().then(res => {
  //     app.globalData.userInfo = res.data.userInfo;
  //     app.globalData.token = res.data.token;
  //     app.globalData.isAuthorize=true;
  //       wx.navigateBack({        delta: 1     });
  //     // this.exit();
  //   }).catch((err) => {
  //     console.log(err)
  //     // wx.navigateBack({        delta: 1     });
  //   });
  // },
  // exit:function(){
  //   app.globalData.exit=true;
  //   wx.reLaunch({
  //     url: '../../index/index',
  //   })    

  // },
  exitLogin: function () {
    wx.showModal({
      title: '',
      confirmColor: '#b4282d',
      content: '退出登录？',
      success: function (res) {
        if (res.confirm) {
          wx.removeStorageSync('token');
          wx.removeStorageSync('userInfo');
          wx.switchTab({
            url: '/pages/index/index'
          });
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   isAuthorize:app.globalData.isAuthorize
    // });
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