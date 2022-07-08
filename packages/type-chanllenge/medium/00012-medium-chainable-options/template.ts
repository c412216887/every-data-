type Chainable<T = unknown> = {
  option<K extends keyof any, V>(
    key: K extends keyof T ? never : K,
    value: V
  ): Chainable<T & { [k in K]: V }>;
  get(): T;
};
