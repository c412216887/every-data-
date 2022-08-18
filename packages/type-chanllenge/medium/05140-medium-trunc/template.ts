type Trunc<T extends number | string> = `${T}` extends `${infer H}.${any}`
  ? H
  : `${T}`;
