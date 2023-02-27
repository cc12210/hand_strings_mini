/// <reference types="miniprogram-api-typings" />
import { SuperComponent, ComponentsOptionsType } from '../common/src/index';
import { MessageProps } from './message.interface';
export default class Message extends SuperComponent {
    externalClasses: string[];
    options: ComponentsOptionsType;
    properties: MessageProps;
    data: {
        prefix: string;
        classPrefix: string;
        loop: number;
        animation: any[];
        showAnimation: any[];
        wrapTop: number;
    };
    observers: {
        marquee(val: any): void;
        icon(v: any): void;
        closeBtn(v: any): void;
    };
    /** 延时关闭句柄 */
    closeTimeoutContext: number;
    /** 动画句柄 */
    nextAnimationContext: number;
    resetAnimation: WechatMiniprogram.Animation;
    ready(): void;
    /** 记录组件设置的项目 */
    memoInitalData(): void;
    resetData(cb: () => void): void;
    detached(): void;
    /** 检查是否需要开启一个新的动画循环 */
    checkAnimation(): void;
    /** 清理动画循环 */
    clearMessageAnimation(): void;
    show(): void;
    hide(): void;
    reset(): void;
    handleClose(): void;
    handleBtnClick(): void;
}
