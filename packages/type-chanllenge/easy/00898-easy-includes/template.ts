type MyEqual<U, K> = (<T>() => T extends U ? 1 : 2) extends <T>() => T extends K
  ? 1
  : 2
  ? true
  : false;

type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R]
  ? MyEqual<F, U> extends false
    ? Includes<R, U>
    : true
  : false;
