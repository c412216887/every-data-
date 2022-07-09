declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{ [K in keyof T]: T[K] extends Promise<infer P> ? P : T[K] }>;

// 数组，可以使用{0: any, 1: any}来表示
