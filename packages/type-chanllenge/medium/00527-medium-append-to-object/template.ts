type AppendToObject<T, U extends keyof any, V> = Omit<
  T & { [key in U]: V },
  ''
>;
