type LookUp<U extends { type: string }, T extends U['type']> = U extends {
  type: T;
}
  ? U
  : never;

// union类型，需要放在extends左边，
