type Shift<T> = T extends [any, ...infer Tail] ? Tail : never;
