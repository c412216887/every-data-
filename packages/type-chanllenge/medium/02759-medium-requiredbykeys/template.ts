type RequiredByKeys<T, K = keyof T> = Omit<
  Required<Pick<T, K & keyof T>> & Omit<T, K & keyof T>,
  ''
>;
