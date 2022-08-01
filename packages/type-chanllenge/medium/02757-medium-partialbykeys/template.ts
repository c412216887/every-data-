type PartialByKeys<T, K = keyof T> = Omit<
  Partial<Pick<T, K & keyof T>> & Omit<T, K & keyof T>,
  ''
>;
