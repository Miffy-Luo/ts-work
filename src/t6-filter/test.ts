import { RFilter, TFilter } from "./KFilter"
export function runFilter() {
    console.log("---------- t6 - filter ----------");
    type Fruit = 'apple' | 'banana' | 'orange';
    type Fruits = ['apple', 'banana', 'orange', 'cherry'];
    type FilterFruits = TFilter<Fruit, Fruits>;
    type FilterFruits_2 = RFilter<Fruit, Fruits>;
}