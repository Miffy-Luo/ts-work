import { Example, hasWithTypes } from "./KReflect";

export function runReflect() {
    let example = new Example();
    console.debug(hasWithTypes(example, "name", String)); // true
    console.debug(hasWithTypes(example, "name", Number)); // false
    console.debug(hasWithTypes(example, "age", Number)); // false
}
