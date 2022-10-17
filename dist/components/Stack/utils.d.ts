import React__default from 'react';

declare function getValidChildren(children: React__default.ReactNode): (string | number | React__default.ReactFragment | React__default.ReactPortal | React__default.ReactElement<any, string | React__default.JSXElementConstructor<any>>)[];
declare const selector = "& > *:not(style) ~ *:not(style)";
declare function isArray(value: any): boolean;
declare const objectKeys: (obj: Record<string, any>) => string[];
declare const isObject: (value: any) => boolean;
declare function mapResponsive(prop: any, mapper: (value: any) => any): any;
declare function getStackStyles(options: Record<string, any>): {
    flexDirection: any;
    "& > *:not(style) ~ *:not(style)": any;
};
declare function getDividerStyles(options: Record<string, any>): {
    '&': any;
};

export { getDividerStyles, getStackStyles, getValidChildren, isArray, isObject, mapResponsive, objectKeys, selector };
