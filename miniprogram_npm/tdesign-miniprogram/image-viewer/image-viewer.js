var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { styles, calcIcon } from '../common/utils';
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
const { prefix } = config;
const name = `${prefix}-image-viewer`;
let ImageViewer = class ImageViewer extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`];
        this.properties = Object.assign({}, props);
        this.data = {
            prefix,
            classPrefix: name,
            currentSwiperIndex: 0,
            windowHeight: 0,
            windowWidth: 0,
            imagesShape: {},
        };
        this.options = {
            multipleSlots: true,
        };
        this.controlledProps = [
            {
                key: 'visible',
                event: 'close',
            },
        ];
        this.observers = {
            visible(value) {
                this.setData({
                    currentSwiperIndex: value ? this.properties.initialIndex : 0,
                });
            },
            closeBtn(v) {
                this.setData({
                    _closeBtn: calcIcon(v, 'close'),
                });
            },
            deleteBtn(v) {
                this.setData({
                    _deleteBtn: calcIcon(v, 'delete'),
                });
            },
        };
        this.methods = {
            saveScreenSize() {
                const { windowHeight, windowWidth } = wx.getSystemInfoSync();
                this.setData({
                    windowHeight,
                    windowWidth,
                });
            },
            calcImageDisplayStyle(imageWidth, imageHeight) {
                const { windowWidth, windowHeight } = this.data;
                const ratio = imageWidth / imageHeight;
                // 图片宽高都小于屏幕宽高
                if (imageWidth < windowWidth && imageHeight < windowHeight) {
                    return {
                        styleObj: {
                            width: `${imageWidth * 2}rpx`,
                            height: `${imageHeight * 2}rpx`,
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        },
                    };
                }
                // 图片宽高至少存在一个大于屏幕宽高，此时判断图片宽高比，按长边显示
                if (ratio >= 1) {
                    return {
                        styleObj: {
                            width: '100vw',
                            height: `${(windowWidth / ratio) * 2}rpx`,
                        },
                    };
                }
                return {
                    styleObj: {
                        width: `${ratio * windowHeight * 2}rpx`,
                        height: '100vh',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    },
                };
            },
            onImageLoadSuccess(e) {
                const { detail: { width, height }, currentTarget: { dataset: { index }, }, } = e;
                const { mode, styleObj } = this.calcImageDisplayStyle(width, height);
                const origin = this.data.imagesShape;
                this.setData({
                    imagesShape: Object.assign(Object.assign({}, origin), { [index]: {
                            mode,
                            style: styles(Object.assign({}, styleObj)),
                        } }),
                });
            },
            onSwiperChange(e) {
                const { detail: { current }, } = e;
                this.setData({
                    currentSwiperIndex: current,
                });
                this._trigger('change', { index: current });
            },
            onClose(e) {
                const { source } = e.currentTarget.dataset;
                this._trigger('close', { visible: false, trigger: source || 'button', index: this.data.currentSwiperIndex });
            },
            onDelete() {
                this._trigger('delete', { index: this.data.currentSwiperIndex });
            },
        };
    }
    ready() {
        this.saveScreenSize();
    }
};
ImageViewer = __decorate([
    wxComponent()
], ImageViewer);
export default ImageViewer;

//# sourceMappingURL=image-viewer.js.map
