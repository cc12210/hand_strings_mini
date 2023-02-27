Page({
    data: {
        activeValues: [0],
    },
    handleChange(e) {
        this.setData({
            activeValues: e.detail.value,
        });
    },
});

//# sourceMappingURL=collapse.js.map
