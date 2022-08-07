type Flip<T extends Record<keyof any, string | number | boolean>> = {
  [K in keyof T as `${T[K]}`]: K;
};
