const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');
// const app =require('../../app');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newGoods: [],
    hotGoods: [],
    topics: [],
    brands: [],
    floorGoods: [],
    banner: [],
    channel: []
    ,urlPrefix:null
  },

  getIndexData: function () {
    let that = this;
    util.request(api.IndexUrl).then(function (res) {
      if (res.errno === 0) {
        that.setData({
          newGoods: res.data.newGoodsList,
          hotGoods: res.data.hotGoodsList,
          topics: res.data.topicList,
          brand: res.data.brandList,
          floorGoods: res.data.categoryList,
          banner: res.data.banner,
          channel: res.data.channel
        });
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('option->');
    console.log(options);
    app.globalData.scene="832bb850-2162-4e42-7060796a2fb8";
    this.setData({urlPrefix:api.HOST});
    this.getIndexData();
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