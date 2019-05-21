// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    three_image:'../image/three.png',
    comprehensive:'综合',
    sales:'销量',
    price:'价格',
    screen:'筛选',
    one_image:'../image/one.png',
    two_image:'../image/two.png',
    clothesOne:'../image/clothes_one.png',
    clothesTwo:'../image/clothes_two.png',
    shoes:'../image/shoes.png',
    title:'户外装备外套（卖点）',
    explain_word:'Jackwolf狼爪 专业户外 合亿购专供',
    money_word:'￥&nbsp;999.00',
    shopCar:'../image/shop_car.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showNavigationBarLoading();
    wx.hideNavigationBarLoading();
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