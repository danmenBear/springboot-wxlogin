//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tel:'130****1111',
    userInfo: {},
    name:'XXX',
    franchiserName:'淘宝',
    erweimaUrl:'../image/2weima.jpg',
    headPortraitUrl:'../image/head1.jpg',
    synopsisInfo: '淘宝网是亚太地区较大的网络零售、商圈，由阿里巴巴集团在2003年5月创立。淘宝网是中国深受欢迎的网购零售平台，拥有近5亿的注册用户数，每天有超过6000万的固定访客，同时每天的在线商品数已经超过了8亿件，平均每分钟售出4.8万件商品。截止2011年年底，淘宝网单日交易额峰值达到43.8亿元，创造270.8万直接 且充分就业机会。随着淘宝网规模的扩大和用户数量的增加，淘宝也从单一的C2C网络集市变成了包括C2C、团购、分销、拍卖等多种电子商务模式在内的综合性零售商圈。目前已经成为世界范围的电子商务交易平台之一。2016年3月15日，315晚会曝光，淘宝商家存在刷单等欺骗消费者现象。2016年3月29日，阿里巴巴集团张勇为淘宝的未来明确了战略：社区化、内容化和本地生活化是三大方向。2018年3月，北京市消协官网显示，北京市消协2017年在淘宝购买了4种比较试验样品，其中有1种不达标，不达标率为25.0%。2018年8月8日，阿里巴巴淘宝透露将进军MR（混合现实）购物领域，即将在2018年造物节上推出产品——淘宝买啊',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../image/logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
