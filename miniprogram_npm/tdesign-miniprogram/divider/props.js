/* eslint-disable */
const props = {
    /** 文本位置（仅在水平分割线有效） */
    align: {
        type: String,
        value: 'center',
    },
    /** 子元素 */
    content: {
        type: String,
    },
    /** 自定义组件样式 */
    style: {
        type: String,
        value: '',
    },
    /** 是否虚线（仅在水平分割线有效） */
    dashed: {
        type: Boolean,
        value: false,
    },
    /** 组件类名，分别用于设置 组件外层类名、分隔线类名 等 */
    externalClasses: {
        type: Array,
    },
    /** 分隔线类型有两种：水平和垂直 */
    layout: {
        type: String,
        value: 'horizontal',
    },
};
export default props;

//# sourceMappingURL=props.js.map
