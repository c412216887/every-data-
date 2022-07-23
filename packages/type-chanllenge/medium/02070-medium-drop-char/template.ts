type DropChar<S, C extends string = ' '> = S extends `${infer F}${infer T}`
  ? F extends C
    ? DropChar<T, C>
    : `${F}${DropChar<T, C>}`
  : S;
