import { KDeepReadonly } from "./KDeepReadonly";
import { Person } from "./Person";

export function runDeepReadonly() {
    type ReadonlyPerson = KDeepReadonly<Person>;
    let person: ReadonlyPerson;
    // person.name = "xxx";
    // person.address.street = "xxxx";
}