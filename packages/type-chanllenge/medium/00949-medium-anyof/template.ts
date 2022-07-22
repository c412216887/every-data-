type False<T> = T extends [] | '' | false | 0
  ? false
  : keyof T extends never
  ? false
  : true;
type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer R]
  ? False<F> extends true
    ? true
    : AnyOf<R>
  : false;
