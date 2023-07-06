import { KArray } from "./KArray";
import { keys, values } from "./KMap";

export function run() {
  console.log("======================= run array ======================");
  let arr = new KArray(1, 2, 3, 4, 5);
  console.log("copyWithIn => " + arr.kCopyWithin(1, 3, 4)); // copyWithIn:1,4,3,4,5
  console.log("filteredArr => " + arr.kFilter((value) => value > 2)); // after filter: 4,3,4,5

  console.log(
    "unshiftArr : " + arr.kUnshift(9, 8) + "  arrLength is " + arr.length
  );

  let calculateNum = arr.kReduce(function (a, b) {
    return a + b;
  });
  console.log("reducedNum => " + calculateNum);

  let flatArr = new KArray();
  flatArr.push(1, [2, [3, 4]], 5);
  console.log("flattedArr => " + flatArr.kFlat());

  console.log("findIndex => " + arr.kFindIndex((value) => value > 0));
  console.log("find => " + arr.kFind((value) => value > 0));
  console.log("some => " + arr.kSome((value) => value > 6));
  console.log("slicedArr => " + arr.kSlice(-3, 3));
  console.log("splicedArr => " + arr.kSplice(1, 2));
  console.log("after splice array => " + arr);

  console.log("======================= run map ======================");
  let map = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"],
  ]);

  console.log(keys(map));
  console.log(values(map));
}

