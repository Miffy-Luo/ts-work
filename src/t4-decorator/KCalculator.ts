import { catchErrors } from "./KDecorator";

@catchErrors
export class KCalculator {
    public add(a: number, b: number) {
        throw new Error("Error!");
    }
}