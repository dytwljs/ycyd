var util = require('./utils/util.js');
var api = require('./config/api.js');
var user = require('./services/user.js');

App({
  onLaunch: function (options) {

    console.log('app.js onLaunch option->');
    this.handOptions(options);
    // this.globalData.scene="832bb850-2162-4e42-7060796a2fb8";
    
    //获取用户的登录信息
    user.checkLogin().then(res => {
      console.log('app login')
      this.globalData.userInfo = wx.getStorageSync('userInfo');
      this.globalData.token = wx.getStorageSync('token');
    }).catch((e) => {
        console.log("App  user.checkLogin error")
        console.log(e)
    });
  },

  onShow:function (options) {
    console.log('app onShow');
   this.handOptions(options);
  },
  onHide: function (options) {
    console.log('app onHide');
    console.log(options);
  },
  //无此事件，在页面触发
  // onShareAppMessage: function () {
  //   return {
  //     title: '一车一店',
  //     desc: '微信小程序商城',
  //     path: '/pages/index/index'
  //   }
  // },
  onError: function(msg) {
    console.log(msg)
  },
  handOptions:function(options){
    console.log(options);
    console.log(options.scene);

    var scene = decodeURIComponent(options.scene)
    this.shareTicket='';
    if(options && options.scene&&options.scene==1044){
      this.shareTicket=options.shareTicket?options.shareTicket:'';
    }
  },
  handSecne(scene){

  },
  globalData: {
    businessInfo:{
      scene:''
    },
    userInfo: {
      nickname: 'Hi,游客',
      username: '点击去登录',
      avatar: '/static/images/head.png'
    },
    token: '',
  }
})