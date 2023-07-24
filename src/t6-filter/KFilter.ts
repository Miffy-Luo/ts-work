// 遍历 Object
export type TFilter<T, U> = {
    [key in keyof T]: T[key] extends U ? T : never;
}

// 递归
export type RFilter<T, U> = U extends [infer P, ...infer Q]
    ? P extends T
    ? [P, ...RFilter<T, Q>]
    : RFilter<T, Q>
    : [];
