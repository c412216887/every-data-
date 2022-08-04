type ObjectEntries<T> = {
  [K in keyof T]-?: [
    K,
    T[K] extends undefined ? T[K] : Exclude<T[K], undefined>
  ];
}[keyof T];
