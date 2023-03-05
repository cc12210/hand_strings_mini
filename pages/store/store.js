const cateList = require('./categories')

Page({
  offsetTopList: [],
  data: {
    showPersonInfo: true,
    sideBarIndex: 1,
    scrollTop: 0,
    categories: cateList.categories,
    infoJson: cateList.infoJson,
  },
  onLoad() {
    const query = wx.createSelectorQuery().in(this);

    query
      .selectAll('.title')
      .boundingClientRect((rects) => {
        this.offsetTopList = rects.map((item) => item.top);
      })
      .exec();
  },
  onSideBarChange(e) {
    const { value } = e.detail;

    this.setData({ sideBarIndex: value, scrollTop: this.offsetTopList[value] });
  },
  onScroll(e) {
    const { scrollTop } = e.detail;
    // console.log(e.detail)
    const threshold = 50; // 下一个标题与顶部的距离

    if (scrollTop < threshold) {
      this.setData({ sideBarIndex: 0 });
      return;
    }

    const index = this.offsetTopList.findIndex((top) => top > scrollTop && top - scrollTop <= threshold);

    if (index > -1) {
      this.setData({ sideBarIndex: index });
    }
  },
  onVisibleChange(e) {
    const visible = e.detail.visible
    this.setData({
        showPersonInfo: visible
    })
  },
});
