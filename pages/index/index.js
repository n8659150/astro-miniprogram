Page({
  data: {
    PageCur: 'bio'
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
})