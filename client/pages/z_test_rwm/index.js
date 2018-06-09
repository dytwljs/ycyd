// pages/z_test_rwm/index.js
var utils = require('../../utils/util.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    pic: null,
    appid:'wx1ca22e3163a07ec6',
    secret:'cb8040536dcc0afb7e3eca7bde0d5ecd',
    scene : "832bb850-2162-4e42-7060796a2fb8",
    page1:"pages/index/index?id=111",
    page2:"pages/ycyd/index?id=222",
    page3:"pages/z_test_rwm/index?id=333"
  },
  button1:function(){
    this.setData({pic:null});
    var page= null;
    this.test(this.data.appid,this.data.secret,this.data.scene,page);    
    console.log(this);
  },
  button2:function(){
    this.setData({pic:null});
    var page= null;
    this.test(this.data.appid,this.data.secret,this.data.scene,page,false);    
    console.log(this);
  },
  button3:function(){
    this.setData({pic:null});
    var page=this.data.page1;
    this.test(this.data.appid,this.data.secret,this.data.scene,page);  
    console.log(this);
  },
  button4:function(){
    this.setData({pic:null});
    var page= this.data.page1;
    this.test(this.data.appid,this.data.secret,this.data.scene,page,false);  
    console.log(this);
  },
  button5:function(){
    this.setData({pic:null});
    var page=this.data.page2;
    this.test(this.data.appid,this.data.secret,this.data.scene,page);  
    console.log(this);
  },
  button6:function(){
    this.setData({pic:null});
    var page= this.data.page2;
    this.test(this.data.appid,this.data.secret,this.data.scene,page,false);  
    console.log(this);
  },
  button7:function(){
    this.setData({pic:null});
    var page=this.data.page3;
    this.test(this.data.appid,this.data.secret,this.data.scene,page);  
    console.log(this);
  },
  button8:function(){
    this.setData({pic:null});
    var page= this.data.page3;
    this.test(this.data.appid,this.data.secret,this.data.scene,page,false);  
    console.log(this);
  },
  /**
   * 生成二维码
   * @param appid
   * @param secret
   * @param scent   传入参数
   * @param page    页面地址
   */
  test: function(appid,secret,scene,page,isArrayBuffer=true) {
    var that = this;
    //https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
    //b类带参数返回
    //https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token==ACCESS_TOKEN
    //1,获取access_token
    var url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type';
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
        "scene": scene,
        "page": page,
        "width": 430
      };
      //获取二维码
      var url1 = 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=' + access_token;
      wx.request({
        url: url1,
        // data:JSON.stringify(post),
        data: post,
        method: 'POST',
        responseType: isArrayBuffer?'arraybuffer':'text',
        success: function(res) {
          if (res.data.errcode){
            console.log('二维码 errcode ');
            console.log(res);
            return;
          }
          if (res.header["Content-Type"] != 'image/jpeg') {
            console.log('二维码 Content-Type，image/jpeg');
            console.log(res);

            console.log(res.data.length+'     len ..bytelen        '+res.data.byteLength);
            // console.log(res.data.byteLength);
            return;
          }

          console.log(res.data.length+'len ..bytelen'+res.data.byteLength);
          const base64 = wx.arrayBufferToBase64(res.data);
          that.setData({
            pic: "data:image/png;base64," + base64
          });
        },
        faild: function(res) {
          console.log('二维码faild， ');
          console.log(res);

        }
      });
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('option->');
    console.log(options);
   // this.test();
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