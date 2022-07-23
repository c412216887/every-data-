// type PercentageParser<
//   A extends string,
//   F = '',
//   N extends string = ''
// > = A extends `${infer H}${infer T}`
//   ? H extends '%'
//     ? [F, N, H]
//     : H extends '+' | '-'
//     ? PercentageParser<T, H, N>
//     : PercentageParser<T, F, `${N}${H}`>
//   : [F, N, ''];

type PercentageParser<A extends string> = A extends `${infer F extends
  | '+'
  | '-'}${infer N}%`
  ? [F, N, '%']
  : A extends `${infer F extends '+' | '-'}${infer N}`
  ? [F, N, '']
  : A extends `${infer N}%`
  ? ['', N, '%']
  : ['', A, ''];
