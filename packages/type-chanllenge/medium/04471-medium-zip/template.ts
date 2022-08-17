type Zip<T, K> = [] extends T | K
  ? []
  : T extends [infer H, ...infer R]
  ? K extends [infer Header, ...infer Rest]
    ? [[H, Header], ...Zip<R, Rest>]
    : []
  : [];
