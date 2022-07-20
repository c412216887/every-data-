type Merge<F, S> = Omit<Omit<F, keyof (F | S)> & S, ''>;
