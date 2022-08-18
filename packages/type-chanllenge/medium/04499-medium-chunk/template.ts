type Chunk<T extends any[], C, N extends any[] = []> = T extends [
  infer H,
  ...infer R
]
  ? [...N, H]['length'] extends C
    ? [[...N, H], ...Chunk<R, C, []>]
    : Chunk<R, C, [...N, H]>
  : N extends []
  ? N
  : [N];
