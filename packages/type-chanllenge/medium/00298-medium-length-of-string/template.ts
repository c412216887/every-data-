type LengthOfString<
  S extends string,
  U extends string[] = []
> = S extends `${any}${infer R}` ? LengthOfString<R, [...U, R]> : U['length'];
