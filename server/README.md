### NideShop商城（服务端）

+ 界面高仿网易严选商城(主要是2016年wap版)
+ 测试数据采集自网易严选商城
+ 功能和数据库参考ecshop
+ 服务端api基于Ｎode.js+ThinkJS+MySQL
+ 计划添加基于Vue.js的后台管理系统、PC版、Ｗap版

本项目需要配合微信小程序端使用，GitHub: [https://github.com/tumobi/nideshop-mini-program](https://github.com/tumobi/nideshop-mini-program)


### 本地开发环境配置
+ 克隆项目到本地
```
git clone https://github.com/tumobi/nideshop
```
+ 创建数据库nideshop并导入项目根目录下的nideshop.sql
```
CREATE SCHEMA `nideshop` DEFAULT CHARACTER SET utf8mb4 ;
```
> 注意数据库字符编码为utf8mb4 
+ 更改数据库配置
  src/common/config/database.js
  
```
const mysql = require('think-model-mysql');

module.exports = {
    handle: mysql,
    database: 'nideshop',
    prefix: 'nideshop_',
    encoding: 'utf8mb4',
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '你的密码',
    dateStrings: true
};
```

+ 填写微信登录和微信支付配置
src/common/config/config.js
```
// default config
module.exports = {
  default_module: 'api',
  weixin: {
    appid: '', // 小程序 appid
    secret: '', // 小程序密钥
    mch_id: '', // 商户帐号ID
    partner_key: '', // 微信支付密钥
    notify_url: '' // 微信异步通知，例：https://www.nideshop.com/api/pay/notify
  }
};
```

+ 安装依赖并启动
```
npm install
npm start
```
访问http://127.0.0.1:8360/

### 线上部署

+ 没有域名部署参考文档：[不用买域名、不用备案、不用配置https快速部署Node.js微信小程序商城（基于Node.js+MySQL+ThinkJS）](http://www.jianshu.com/p/78a0f5f424e1)

+ 如有域名且已备案，可参考：
  + [阿里云 Ubuntu 16.04 下部署 Node.js + MySQL 微信小程序商城](http://www.jianshu.com/p/38d13a7c1b78)
  + [阿里云 CentOS 7.3 下部署基于 Node.js + MySQL 的微信小程序商城](http://www.jianshu.com/p/5d5497697b0a)


### 微信小程序客户端截图

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

### 最后
+ 喜欢别忘了 Star
+ 微信号 tumobi
+ 交流 QQ 群：497145766




g_debug_error   调试报错
/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/thinkjs/node_modules/bluebird/js/release/util.js    369
/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/thinkjs/node_modules/bluebird/js/release/async.js   3
/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/thinkjs/node_modules/bluebird/js/release/debuggability.js   132
at exports.default (/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/babel-template/lib/index.js:12:11)
  at exports.default (/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/babel-template/lib/index.js:12:11)

  babel-template/lib/index.js:12:11
发生异常: Error
Error: ENOENT: no such file or directory, access '/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/thinkjs/lib/config/config.development.js'
    at Object.fs.accessSync (fs.js:322:11)
    at isExist (/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/think-helper/index.js:378:8)
    at Object.isFile (/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/think-helper/index.js:391:8)
    at configPaths.forEach.configPath (/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/think-loader/loader/config.js:20:18)
    at Array.forEach (<anonymous>)
    at Config.loadConfigByName (/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/think-loader/loader/config.js:18:17)
    at Config.loadConfig (/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/think-loader/loader/config.js:35:10)
    at modules.forEach.dir (/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/think-loader/loader/config.js:137:29)
    at Array.forEach (<anonymous>)
    at Config.load (/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/think-loader/loader/config.js:127:15)
    at Loader.loadConfig (/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/think-loader/index.js:37:27)
    at thinkLoader.loadAll (/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/thinkjs/lib/loader.js:103:33)
    at Application.run (/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/thinkjs/lib/application.js:202:18)
    at Object.<anonymous> (/Users/root1/Desktop/vs/ns/nideshop-master/development.js:16:10)
    at Module._compile (module.js:646:14)
    at Object.Module._extensions..js (module.js:660:10)

  发生异常: Error
Error: ENOENT: no such file or directory, stat '/Users/root1/Desktop/vs/ns/nideshop-master/app/common/adapter'
    at Object.fs.existsSync (fs.js:350:13)
    at Object.getdirFiles (/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/think-helper/index.js:459:11)
    at Config.loadAdapter (/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/think-loader/loader/config.js:45:26)
    at modules.forEach.dir (/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/think-loader/loader/config.js:139:30)
    at Array.forEach (<anonymous>)
    at Config.load (/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/think-loader/loader/config.js:127:15)
    at Loader.loadConfig (/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/think-loader/index.js:37:27)
    at thinkLoader.loadAll (/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/thinkjs/lib/loader.js:103:33)
    at Application.run (/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/thinkjs/lib/application.js:202:18)
    at Object.<anonymous> (/Users/root1/Desktop/vs/ns/nideshop-master/development.js:16:10)
    at Module._compile (module.js:646:14)
    at Object.Module._extensions..js (module.js:660:10)
    at Module.load (module.js:561:32)
    at tryModuleLoad (module.js:501:12)
    at Function.Module._load (module.js:493:3)
    at Function.Module.runMain (module.js:690:10)

    /Users/root1/Desktop/vs/ns/nideshop-master/src/admin"


    发生异常: Error
Error
    at Object.<anonymous> (/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/thinkjs/node_modules/bluebird/js/release/util.js:369:12)
    at Module._compile (module.js:649:30)
    at Object.Module._extensions..js (module.js:660:10)
    at Module.load (module.js:561:32)
    at tryModuleLoad (module.js:501:12)
    at Function.Module._load (module.js:493:3)
    at Module.require (module.js:593:17)
    at require (internal/module.js:11:18)
    at module.exports (/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/thinkjs/node_modules/bluebird/js/release/promise.js:14:12)
    at Object.<anonymous> (/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/thinkjs/node_modules/bluebird/js/release/bluebird.js:9:36)

    document is not defined
    at /Users/root1/Desktop/vs/ns/nideshop-master/node_modules/thinkjs/node_modules/bluebird/js/release/debuggability.js

    document is not defined  debuggability.js


Error: ENOENT: no such file or directory, access '/Users/root1/Desktop/vs/ns/nideshop-master/node_modules/thinkjs/lib/config/config.development.js'

Error: ENOENT: no such file or directory, access thinkjs/lib/config/config.development.js'