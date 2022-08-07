type String2Union<T> = T extends `${infer F}${infer R}`
  ? F | String2Union<R>
  : T;

type AllCombinations<
  S extends string,
  U extends string = String2Union<S>
> = S extends `${infer F}${infer R}`
  ?
      | {
          [K in U]: `${K}${AllCombinations<R, Exclude<U, K>>}`;
        }[U]
      | ''
  : '';

type R = AllCombinations<'AB'>;
