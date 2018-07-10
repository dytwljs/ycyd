
本项目需要配合NideShop商城服务端使用，GitHub: [https://github.com/tumobi/nideshop](https://github.com/tumobi/nideshop)

### 项目截图

![首页](http://upload-images.jianshu.io/upload_images/3985656-c543b937ac6e79bb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/320)

![专题](http://upload-images.jianshu.io/upload_images/3985656-bd606aac3b5491c2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/320)

![分类](http://upload-images.jianshu.io/upload_images/3985656-fa9565158376d439.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/320)

![商品列表](http://upload-images.jianshu.io/upload_images/3985656-788b7fd2c4a558d0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/320)

![商品详情](http://upload-images.jianshu.io/upload_images/3985656-99a6e0a57778d85f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/320)

![购物车](http://upload-images.jianshu.io/upload_images/3985656-60ff2307d81f6bb2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/320)

![订单中心](http://upload-images.jianshu.io/upload_images/3985656-dff837e6b2ec87b3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/320)



### 功能列表
+ 首页
+ 分类首页、分类商品、新品首发、人气推荐商品页面
+ 商品详情页面，包含加入购物车、收藏商品、商品评论功能
+ 搜索功能
+ 专题功能
+ 品牌功能
+ 完整的购物流程，商品的加入、编辑、删除、批量选择，收货地址的选择，下单支付
+ 会员中心（订单、收藏、足迹、收货地址、意见反馈）
....

### 项目结构
```
├─config                
├─lib
│  └─wxParse　　　
├─pages
│  ├─auth
│  │  ├─login
│  │  ├─register
│  │  └─reset
│  ├─brand
│  ├─brandDetail
│  ├─cart
│  ├─catalog
│  ├─category
│  ├─comment
│  ├─goods
│  ├─hotGoods
│  ├─index
│  ├─logs
│  ├─newGoods
│  ├─pay
│  ├─search
│  ├─shopping
│  │  ├─address
│  │  ├─addressAdd
│  │  └─checkout
│  ├─topic
│  ├─topicDetail
│  └─ucenter
│      ├─address
│      ├─addressAdd
│      ├─collect
│      ├─coupon
│      ├─feedback
│      ├─footprint
│      ├─index
│      ├─order
│      └─orderDetail
├─static
│  └─images
└─utils
```

### 服务端api
项目地址：https://github.com/tumobi/nideshop

### 最后
+ 喜欢别忘了 Star
+ 微信号 tumobi
+ 交流 QQ 群：497145766

登录流程候改。
原  
一，app.js 
1,user.checkLogin
            if (wx.getStorageSync('userInfo') && wx.getStorageSync('token')
                util.checkSession()

2,this.globalData.userInfo = wx.getStorageSync('userInfo');
      this.globalData.token = wx.getStorageSync('token');
二，auth/login.js
1，user.loginByWeixin().then(res => {
      this.setData({
        userInfo: res.data.userInfo

      });
      app.globalData.userInfo = res.data.userInfo;
      app.globalData.token = res.data.token;

三，users.
    util.login().then((res) => {
      code = res.code;
      return util.getUserInfo();
    }).then((userInfo) => {
      //登录远程服务器
      util.request(api.AuthLoginByWeixin, { code: code, userInfo: userInfo }, 'POST').then(res => {
        if (res.errno === 0) {
          //存储用户信息
          wx.setStorageSync('userInfo', res.data.userInfo);
          wx.setStorageSync('token', res.data.token);
现有流程
一，判断
