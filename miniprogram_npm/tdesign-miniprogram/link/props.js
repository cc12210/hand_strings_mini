/* eslint-disable */
const props = {
    /** 链接内容 */
    content: {
        type: String,
    },
    /** 与 navigator 原生组件属性保持一致，具体使用参考：https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html。 */
    navigatorProps: {
        type: Object,
    },
    /** 前置图标 */
    prefixIcon: {
        type: null,
    },
    /** 尺寸 */
    size: {
        type: String,
        value: 'medium',
    },
    /** 组件状态 */
    status: {
        type: String,
        value: 'normal',
    },
    /** 前置图标 */
    suffixIcon: {
        type: null,
    },
    /** 组件风格，依次为默认色、品牌色、危险色、警告色、成功色 */
    theme: {
        type: String,
        value: 'default',
    },
    /** 普通状态是否显示链接下划线 */
    underline: {
        type: Boolean,
    },
};
export default props;

//# sourceMappingURL=props.js.map
