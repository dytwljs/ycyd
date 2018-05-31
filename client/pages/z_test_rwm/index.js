// pages/z_test_rwm/index.js
var utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic: null
  },
  test: function() {
    var that = this;
    //https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
    //b类带参数返回
    //https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token==ACCESS_TOKEN
    var url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type';
    var appid = 'wx1ca22e3163a07ec6';
    var secret = 'cb8040536dcc0afb7e3eca7bde0d5ecd';
    var access_token = null;
    var data1 = {
      grant_type: 'client_credential',
      appid: appid,
      secret: secret
    };
    utils.request(url, data1, 'GET').then(function(res) {
      if (!res.access_token)
        return;
      access_token = res.access_token;
      //开发版本时可不带page参数，因为未发布
      var post = {
        "scene": "832bb850-2162-4e42-7060796a2fb8",
        // "page": "pages/index/index",
        "width": 215
      };

      var url1 = 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=' + access_token;
      wx.request({
        url: url1,
        // data:JSON.stringify(post),
        data: post,
        method: 'POST',
        responseType: 'arraybuffer',
        success: function(res) {
          if (res.header["Content-Type"] != 'image/jpeg') {
            console.log('获取二维码失败，请检查');
            console.log(res);
            return;
          }
          if (res.data.errcode)
            return;
          const base64 = wx.arrayBufferToBase64(res.data);
          that.setData({
            pic: "data:image/png;base64," + base64
          });
        },
        faild: function(res) {}
      });
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.test();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})