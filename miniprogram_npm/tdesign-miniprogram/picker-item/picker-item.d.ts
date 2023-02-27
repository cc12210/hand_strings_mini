import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class PickerItem extends SuperComponent {
    relations: RelationsOptions;
    externalClasses: string[];
    properties: import("./type").TdPickerItemProps;
    observers: {
        options(this: PickerItem): void;
    };
    data: {
        prefix: string;
        classPrefix: string;
        offset: number;
        duration: number;
        value: string;
        curIndex: number;
    };
    methods: {
        onTouchStart(event: any): void;
        onTouchMove(event: any): void;
        onTouchEnd(): void;
        update(): void;
        resetOrigin(): void;
        getCount(): any;
    };
    /**
     * 将屏幕滑动距离换算为视图偏移量 模拟渐进式滚动
     * @param touchDeltaY 屏幕滑动距离
     */
    calculateViewDeltaY(touchDeltaY: number): number;
    created(): void;
}
