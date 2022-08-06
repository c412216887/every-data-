type BEM<B extends string, E extends string[], M extends string[]> = E extends [
  string,
  ...string[]
]
  ? BEM<`${B}__${E[number]}`, [], M>
  : M extends [string, ...string[]]
  ? `${B}--${M[number]}`
  : B;
