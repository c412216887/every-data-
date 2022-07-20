type StringToUnion<T extends string> = T extends `${infer F}${infer Tail}`
  ? F | StringToUnion<Tail>
  : never;
