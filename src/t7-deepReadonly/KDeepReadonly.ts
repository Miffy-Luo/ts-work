export type KDeepReadonly<T> = {
    readonly [key in keyof T]: T[key]
}