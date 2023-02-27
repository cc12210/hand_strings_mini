/// <reference types="miniprogram-api-typings" />
/// <reference types="miniprogram-api-typings" />
declare type Context = WechatMiniprogram.Page.TrivialInstance | WechatMiniprogram.Component.TrivialInstance;
export declare const debounce: (func: any, wait?: number) => (...rest: any[]) => void;
export declare const throttle: (func: any, wait?: number, options?: any) => (...args: any[]) => void;
export declare const classNames: (...args: any[]) => string;
export declare const styles: (styleObj: any) => string;
export declare const getAnimationFrame: (cb: Function) => WechatMiniprogram.NodesRef;
export declare const getRect: (context: any, selector: string, needAll?: boolean) => Promise<any>;
export declare const isNumber: (value: any) => boolean;
export declare const addUnit: (value?: string | number) => string | undefined;
/**
 * 计算字符串字符的长度并可以截取字符串。
 * @param str 传入字符串（maxcharacter条件下，一个汉字表示两个字符）
 * @param max 规定最大字符串长度
 * @returns 当没有传入maxCharacter/maxLength 时返回字符串字符长度，当传入maxCharacter/maxLength时返回截取之后的字符串和长度。
 */
export declare const getCharacterLength: (type: string, str: string, max?: number) => {
    length: number;
    characters: string;
};
export declare const chunk: (arr: any[], size: number) => any[][];
export declare const getInstance: (context?: Context, selector?: string) => WechatMiniprogram.Component.TrivialInstance;
export declare const unitConvert: (value: number | string) => number;
export declare const setIcon: (iconName: any, icon: any, defaultIcon: any) => {
    [x: string]: any;
};
export declare const isBool: (val: any) => boolean;
export declare const isObject: (val: any) => boolean;
export declare const isString: (val: any) => boolean;
export declare const toCamel: (str: any) => any;
export declare const getCurrentPage: <T>() => T & WechatMiniprogram.OptionalInterface<WechatMiniprogram.Page.ILifetime> & WechatMiniprogram.Page.InstanceProperties & WechatMiniprogram.Page.InstanceMethods<WechatMiniprogram.IAnyObject> & WechatMiniprogram.Page.Data<WechatMiniprogram.IAnyObject> & WechatMiniprogram.IAnyObject;
export declare const uniqueFactory: (compName: any) => () => string;
export declare const calcIcon: (icon: string | Record<string, any>, defaultIcon?: string) => string | Record<string, any>;
export {};
