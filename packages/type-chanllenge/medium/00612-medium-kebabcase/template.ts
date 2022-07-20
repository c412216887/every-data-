type U = 'A' | 'B' | 'C' | 'F';
type KebabCase<S, F extends string = ''> = S extends `${infer H}${infer T}`
  ? H extends U
    ? `${F}${Lowercase<H>}${KebabCase<T, '-'>}`
    : `${H}${KebabCase<T, '-'>}`
  : S;
