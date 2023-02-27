/* eslint-disable */
const props = {
    /** 关闭按钮 */
    closeBtn: {
        type: Boolean,
        value: true,
    },
    /** 用来定义 value / label 在 `options` 中对应的字段别名 */
    keys: {
        type: Object,
    },
    /** 可选项数据源 */
    options: {
        type: Array,
        value: [],
    },
    /** 每级展示的次标题 */
    subTitles: {
        type: Array,
        value: [],
    },
    /** 展示风格 */
    theme: {
        type: String,
        value: 'step',
    },
    /** 标题 */
    title: {
        type: String,
    },
    /** 选项值 */
    value: {
        type: null,
        value: null,
    },
    /** 选项值，非受控属性 */
    defaultValue: {
        type: null,
        value: null,
    },
    /** 是否展示 */
    visible: {
        type: Boolean,
        value: false,
    },
};
export default props;

//# sourceMappingURL=props.js.map
