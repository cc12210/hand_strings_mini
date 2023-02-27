Page({
    data: {
        failImage: 'error-circle-filled',
    },
    toHome() {
        wx.reLaunch({
            url: '/pages/home/home',
        });
    },
});

//# sourceMappingURL=navigateFail.js.map
