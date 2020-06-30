const { fetchBioDataFromServer, renderBioData } = require('../../../models/bio');
// pages/fortune/Sagittarius/Sagittarius.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bioData: [],
    data: [{ title: '本周运势', startDate:'2020.06.21', endDate:'2020.06.28', text: '本周射手座在感情上会有不错的进展，两个人都会进入稳定的阶段，但在事业上会面临很多压力导致精神上疲惫和懈怠，所以需要学会放松心态调整自己。财运上本周需要理智消费，健康方面本周可以多多锻炼身体来提高身体抵抗力。'}, 
    { title: '本月运势', startDate:'2020.06.01', endDate:'2020.06.30', text: '一向严格要求自己的射手们在本月仍然会保持忙碌，但“忙碌”未必体现在工作上，更有可能是对自己的投资，譬如办健身卡、报培训班等等。这是一个提升自己的好机会，不过，在自我投资的同时仍然要注意休息，也不要因此而过度消费、劳累，否则就得不偿失了。'}],
    TabCur: 0,
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
    })
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
    fetchBioDataFromServer('Sagittarius')
      .then((data)=> {
        this.setData({
          bioData: data.map(renderBioData)
        })
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