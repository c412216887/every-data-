type Join<
  T extends string[],
  U extends string | number,
  F extends string | number = ''
> = T extends [infer H extends string, ...infer R extends string[]]
  ? `${F}${H}${Join<R, U, U>}`
  : '';
