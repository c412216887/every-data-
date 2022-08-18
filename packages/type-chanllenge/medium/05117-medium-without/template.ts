type ToUnion<T> = T extends any[] ? T[number] : T;

type Without<T extends unknown[], U> = T extends [infer H, ...infer R]
  ? H extends ToUnion<U>
    ? Without<R, U>
    : [H, ...Without<R, U>]
  : [];
