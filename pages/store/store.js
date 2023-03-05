// const cateList = require('./categories')

Page({
  offsetTopList: [],
  data: {
    showPersonInfo: false,
    showAddFriend: false,
    sideBarIndex: 1,
    scrollTop: 0,
    infoDetails: [],
    categories: [],
    infoJson: [],
  },
  onLoad() {
    // console.log(JSON.stringify(this.data.infoDetails))
    // console.log(JSON.stringify(this.data.categories))
    // console.log(JSON.stringify(this.data.infoJson))

    this.getCategories()
  },
  onSideBarChange(e) {
    const {
      value
    } = e.detail;

    this.setData({
      sideBarIndex: value,
      scrollTop: this.offsetTopList[value]
    });
  },
  // 获取用户信息
  getCategories() {
    console.log('test')
    wx.request({
      url: 'https://unknown-host.com/api/categories',
      method: 'get',
      success: (res) => {
        console.log(res)
        const data = res.data || {}
        this.setData({
          categories: data.categories,
          infoDetails: data.infoDetails,
          infoJson: data.infoJson,
        })

        setTimeout(() => {
          this.initScroll()
        }, 100);
      }
    })
  },
  initScroll() {

    const query = wx.createSelectorQuery().in(this);

    query
      .selectAll('.title')
      .boundingClientRect((rects) => {
        this.offsetTopList = rects.map((item) => item.top);
      })
      .exec();
  },
  onScroll(e) {
    const {
      scrollTop
    } = e.detail;
    // console.log(e.detail)
    const threshold = 50; // 下一个标题与顶部的距离

    if (scrollTop < threshold) {
      this.setData({
        sideBarIndex: 0
      });
      return;
    }

    const index = this.offsetTopList.findIndex((top) => top > scrollTop && top - scrollTop <= threshold);

    if (index > -1) {
      this.setData({
        sideBarIndex: index
      });
    }
  },
  //   显示隐藏用户信息
  onVisibleChange(e) {
    const visible = e.detail.visible
    this.setData({
      showPersonInfo: visible
    })
  },
  // 显示隐藏加我好友弹层
  onAddFriendChange(e) {
    const visible = e.detail.visible
    this.setData({
      showAddFriend: visible
    })
  },
  // 显示用户弹层
  showInfoDetails() {
    this.setData({
      showPersonInfo: true
    })
  },
  // 点击复制用户信息
  copyPersonInfo(e) {
    console.log(e)
    const value = e.target.dataset.info
    wx.setClipboardData({
      data: value,
      success: () => {
        wx.showToast({
          title: '复制成功',
        })
      },
      fail: () => {
        wx.showToast({
          title: '复制失败',
          icon: "error"
        })
      }
    })
  },
  // 点击加我好友
  showAddImage() {
    this.setData({
      showAddFriend: true
    })
  },
  // 预览图片内容
  perviewImage(e) {
    const current = e.currentTarget.dataset.current
    const list = e.currentTarget.dataset.urls
    const urls = list.map(item => item.image)
    wx.previewImage({
      current, // 当前显示图片的http链接
      urls // 需要预览的图片http链接列表
    })
  }
});