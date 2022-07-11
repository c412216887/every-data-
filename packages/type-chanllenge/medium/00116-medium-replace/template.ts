type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${From}${infer R}`
  ? `${To}${R}`
  : S extends `${infer H}${From}${infer R}`
  ? `${H}${To}${R}`
  : S extends `${infer F}${From}`
  ? `${F}${To}`
  : S;
