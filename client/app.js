var util = require('./utils/util.js');
var api = require('./config/api.js');
var user = require('./services/user.js');
/** 
 * wx.getStorageSync('userInfo')  用户信息
 * wx.getStorageSync('token')     
 *  wx.getStorageSync('addressId')    地址信息
 * globalData.scene
 * globalData.saleInfo
 * globalData.userInfo
 * globalData.isAuthorize
*/
App({
  onLaunch: function (options) {
    this.handOptions(options);
    
    //获取用户的登录信息
    user.checkLogin().then(res => {
      console.log('app login')
      this.globalData.userInfo = wx.getStorageSync('userInfo');
      this.globalData.token = wx.getStorageSync('token');
      //g_add
      this.globalData.isAuthorize  =true;
    }).catch((e) => {
        console.log("App  user.checkLogin error")
        console.log(e)
    });
  },
  handOptions:function(options){
    console.log(options);
    console.log(options.scene);

    var scene = decodeURIComponent(options.query.scene);
    
     //wx.setStorageSync('scene',scene);
     this.globalData.scene=scene;
    // wx.setStorageSync('scene','97574194493047655');
    // this.shareTicket='';
    // if(options && options.scene&&options.scene==1044){
    //   this.shareTicket=options.shareTicket?options.shareTicket:'';
    // }
    //
    
  },
  
  globalData: {
    scene:''
    ,isAuthorize:false
    ,saleInfo:{}    
    ,userInfo: {
      nickname: 'Hi,游客',
      username: '点击去登录',
      avatar: 'http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png'
    },
    token: '',
  }
})