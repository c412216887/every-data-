type TrimRight<S extends string> = S extends `${infer H}${' ' | '\n' | '\t'}`
  ? TrimRight<H>
  : S;
