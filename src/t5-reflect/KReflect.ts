import "reflect-metadata"

// 创建一个装饰器来保存属性类型
function type(value: Function) {
    return Reflect.metadata('type', value);
}

export class Example {
    @type(String)
    public name: string | undefined;
}

export function hasWithTypes(target: any, propKey: string, propType: Function): boolean {
    let type = Reflect.getMetadata('type', target, propKey);
    return type === propType;
}