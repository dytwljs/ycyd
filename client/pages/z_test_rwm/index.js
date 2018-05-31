// pages/z_test_rwm/index.js
var utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic: null
  },
  rwm: function() {
    //https://api.weixin.qq.com/wxa/getwxacode?access_token=ACCESS_TOKEN
    var url = 'https://api.weixin.qq.com/wxa/getwxacode?access_token=ACCESS_TOKEN';
    var access_token = null;
    this.getAccess_Token();
    var post = {
      scene: '832bb850-2162-4e42-99ab-7060796a2fb8',
      page: 'pages/index/index'
    };
    // wx.request({
    //   url: url
    //   , data: post
    //   , method: 'POST'
    //   , header: { 'content-type': 'application/json' }
    //   , success: function (res) {
    //     console.log(res);
    //   }
    //   , faild: function (res) { }
    // });

  },
  getAccess_Token: function() {
    //https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
    var url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type';
    var appid = 'wx1ca22e3163a07ec6';
    var secret = 'cb8040536dcc0afb7e3eca7bde0d5ecd';
    var data = {
      grant_type: 'client_credential',
      appid: appid,
      secret: secret
    };
    utils.request(url, data, 'GET').then(function(res) {

    });
    // var a = wx.request({
    //   url: url,
    //   data: {
    //     grant_type: 'client_credential',
    //     appid: appid,
    //     secret: secret
    //   },
    //   method: 'GET',
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success: function (res) {
    //     if (res.data.errcode == 41002) {
    //     }
    //     if (res.data.access_token)
    //       return res.data.access_token;
    //   },
    //   faild: function (res) {
    //     console.log(res);

    //   }
    // });
    // console.log(a);
    return null;
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
        // 'scene': '832bb850-2162-4e42-99ab-7060796a2fb8',
        "scene": "832bb850-2162-4e42-7060796a2fb8"
          // "page": "pages/index/index"
          ,
        "width": 430
      };

      var url1 = 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=' + access_token;
      wx.request({
        url: url1,
        // data:JSON.stringify(post),
        data: post,
        method: 'POST',
        header: {
          // 'content-type': 'application/json'
          'content-type': 'image/jpeg'
          // 'content-type': 'application/x-www-form-urlencoded'
        },
        responseType:'arraybuffer',
        success: function(res) {
          if (res.data.errcode)
            return;
          // this.setdData({            pic:res.data;          });
          const base64 = wx.arrayBufferToBase64(res.data);
          that.setData({
            pic: "data:image/png;base64," + base64
          });
          console.log(res);
          // console.log(res.data.errcode);
          //console.log(res.data.errmsg);
        },
        faild: function(res) {}
      });
    });
    // var a = wx.request({
    //   url: url,
    //   data: {
    //     grant_type: 'client_credential',
    //     appid: appid,
    //     secret: secret
    //   },
    //   method: 'GET',
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success: function (res) {
    //     if (res.data.errcode == 41002) {
    //     }
    //     if (res.data.access_token)
    //       return res.data.access_token;
    //   },
    //   faild: function (res) {
    //     console.log(res);

    //   }
    // });
    // console.log(a);


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