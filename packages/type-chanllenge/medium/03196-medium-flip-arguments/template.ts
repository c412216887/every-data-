type ReverseArray<T> = T extends [infer F, ...infer R]
  ? [...ReverseArray<R>, F]
  : [];

type FlipArguments<T extends Function> = T extends (...args: infer A) => infer R
  ? (...args: ReverseArray<A>) => R
  : never;
