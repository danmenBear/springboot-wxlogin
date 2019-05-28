// pages/mine/mine.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mine_image:'../image/mine.png',
    user_name:'大嘴鱼',
    distributor:'经销商',
    address_image:'../image/address.png',
    address_word:'收货地址',
    order:'我的订单',
    payment:'../image/payment.png',
    shipment:'../image/shipment.png',
    recivice:'../image/recivice.png',
    finish:'../image/finish.png',
    payment_word:'代付款',
    shipment_word:'代发货',
    recivice_word:'待收货',
    finish_word:'已完成',
    star_image:'../image/star.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var self = this
    wx.request({
      url: app.globalData.extranetUrl + "/message",
      method: "get",
      success: function (result) {
        console.log(result);
        console.log(result.data.user_name);
        console.log(result.data.distributor);
        self.setData({
          user_name: result.data.user_name,
          distributor: result.data.distributor,
          mine_image: result.data.mine_image,
          order: result.data.order
        })
      }
    })
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