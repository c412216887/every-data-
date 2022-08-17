type IsTuple<T extends { length: unknown }> = [T] extends [never]
  ? false
  : T extends readonly any[]
  ? number extends T['length']
    ? false
    : true
  : false;

/**
 *
 * 是否为元组
 * 元组的长度是有限的，数组的长度是无限的
 * 什么是数组 -- string[]
 * 什么是元组 -- [string, number] | ['a', 'b']
 * */
