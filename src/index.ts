import { runContainer } from "./t2-container";
import { runDecorator } from "./t4-decorator";
import { runReflect } from "./t5-reflect";
import { runFilter } from "./t6-filter";
import { runDeepReadonly } from "./t7-deepReadonly";

console.log("hello ts work");

// runContainer(); // T2
// runDecorator(); // T4
// runReflect();  // T5
// runFilter();// T6
runDeepReadonly(); // T7