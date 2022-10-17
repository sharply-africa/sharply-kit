import React__default from 'react';

declare type Ref<T> = React__default.Dispatch<React__default.SetStateAction<T>> | React__default.ForwardedRef<T>;
declare type Children = string | number | React__default.ReactElement<any, string | React__default.JSXElementConstructor<any>> | React__default.ReactFragment | React__default.ReactPortal;
declare function assignRef<T = any>(ref: React__default.ForwardedRef<T>, value: T | null): void;
declare function mergeRefs<T = any>(...refs: Ref<T>[]): (node: T | null) => void;

export { Children, assignRef, mergeRefs };
