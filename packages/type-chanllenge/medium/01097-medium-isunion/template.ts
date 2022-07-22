type IsUnion<T, F = T> = (
  T extends F ? (F extends T ? true : false) : never
) extends true
  ? false
  : true;

// 判断是不是联合类型，自身相互extends, 联合类型会输出boolean,非联合类型输出true
