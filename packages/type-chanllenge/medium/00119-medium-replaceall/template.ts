type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${From}${infer R}`
  ? `${To}${ReplaceAll<R, From, To>}`
  : S extends `${infer H}${From}${infer R}`
  ? `${ReplaceAll<H, From, To>}${To}${ReplaceAll<R, From, To>}`
  : S extends `${infer H}${From}`
  ? `${ReplaceAll<H, From, To>}${To}`
  : S;
