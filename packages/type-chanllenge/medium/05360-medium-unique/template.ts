import type { Equal } from '@type-challenges/utils';
type InArray<T extends any[], I> = T extends [infer H, ...infer R]
  ? Equal<H, I> extends false
    ? InArray<R, I>
    : true
  : false;

export type Unique<T extends any[], U extends any[] = []> = T extends [
  infer H,
  ...infer R
]
  ? InArray<U, H> extends true
    ? Unique<R, U>
    : Unique<R, [...U, H]>
  : U;
