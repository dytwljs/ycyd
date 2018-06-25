// pages/index/index.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('index onLoad option->');
    // console.log(options);
    // app.globalData.scene="832bb850-2162-4e42-7060796a2fb8";
  
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
    return {
      title: '一车一店',
      desc: '一车一店新零售',
      path: '/pages/index/index'+'?scene='+app.globalData.scene
      ,success:function(res){
        console.log(res.shareTickets[0]);
      }
      ,fail:function(res){
        console.log('转发到群/好友失败');
      }
    }
  
  }
})