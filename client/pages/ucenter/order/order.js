var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');

Page({
  data: {
    orderList: []
    ,pageSize: 3 //g_add
    ,count: 0
    ,currentPage: 1
    ,totalPages: 1
    ,alreadyGetPage: []
  },
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数

    this.getOrderList();
  },
  getOrderList() {
    let that = this;
    if (that.data.alreadyGetPage.find((e) => {
        if (e == that.currentPage)
          return true;
        
      }))
      return;
    util.request(api.OrderList, {
      count: that.data.count,
      currentPage: that.data.currentPage,
      totalPages: that.data.totalPages,
      pageSize: that.data.pageSize
    }, 'POST').then(function(res) {
      if (res.errno === 0) {
        console.log(res.data);
        that.setData({
          // orderList: res.data.data,
          count: res.data.count,
          currentPage: res.data.currentPage,
          totalPages: res.data.totalPages
        });
        if (!that.data.alreadyGetPage.find((e) => {
            if (e == that.currentPage)
              return true;
            
          })) {
          that.setData({
            orderList:that.data.orderList.concat(res.data.data)
            ,alreadyGetPage:that.data.alreadyGetPage.concat(res.data.currentPage)
          });
        }

      }
    });
  },
  payOrder(event) {
    let index = event.target.dataset.orderIndex;
    let orderId = this.data.orderList[index].id;
    let actualPrice = this.data.orderList[index].actual_price;
    wx.redirectTo({
      url: '/pages/pay/pay?orderId=' + orderId + '&actualPrice=' + actualPrice,
    })
  },
  onReachBottom: function() { //下拉  
    if (this.data.currentPage == this.data.totalPages)
      return;
    this.setData({
      currentPage: this.data.currentPage + 1
    });
    this.getOrderList();

  },
  // onPullDownRefresh:function(){   //上拉     
  //   if(this.data.currentPage==1)
  //     return;
  //   this.setData({currentPage:this.data.currentPage-1});
  //   this.getOrderList();

  // },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  }
})