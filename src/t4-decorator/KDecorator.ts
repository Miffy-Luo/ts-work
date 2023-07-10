export function catchErrors(target: any) {
    let properties = Object.getOwnPropertyNames(target.prototype);
    properties.forEach((property) => {
        let originalMethod = target.prototype[property]; // 获取原始函数
        if (typeof originalMethod !== "function" || target.prototype[property] === target.prototype.constructor) {
            return;
        }
        target.prototype[property] = function (...args: any[]) {
            try {
                return originalMethod(...args);
            } catch (error) {
                console.error(`Error occurred in ${property}: ${error}`);
            }
        }
    })
}

