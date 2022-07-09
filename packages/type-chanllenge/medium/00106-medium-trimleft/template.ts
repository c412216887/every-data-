type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}`
  ? TrimLeft<R>
  : S;

// union类型，在模板字符串中，需要使用${}包裹
