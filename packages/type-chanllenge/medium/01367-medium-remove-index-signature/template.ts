type RemoveIndexSignature<T> = {
  [K in keyof T as string extends K
    ? never
    : number extends K
    ? never
    : symbol extends K
    ? never
    : K]: T[K];
};

// 可以作为属性签名的，只能是number、string、 symbol
