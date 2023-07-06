/** 实现数组的 forEach、concat、copyWithin、filter、map、shift、unshift、reduce、reverse、flat、findIndex、find、some、sort、slice、splice 等方法 */
export class KArray<T> extends Array<T> {
  constructor(...items: T[]) {
    super(...items);
  }

  kForEach(callbackfn: (value: T, index: number, array: T[]) => void) {
    for (let i = 0; i < this.length; i++) {
      callbackfn(this[i], i, this);
    }
  }

  kConcat(items: T[]) {
    this.push(...items);
    return this;
  }

  kCopyWithin(target: number, start?: number, end?: number) {
    let arrLength = this.length;
    let targetIndex = target < 0 ? 0 : Math.min(target, arrLength);
    let startIndex =
      start === undefined || start < 0 ? 0 : Math.min(start, arrLength);
    let endIndex = end === undefined || end > arrLength ? arrLength : end;
    for (let index = startIndex; index < endIndex; index++) {
      this[targetIndex] = this[startIndex];
      targetIndex++;
    }
    return this;
  }

  kFilter(predicate: (value: T, index: number, array: T[]) => boolean): T[] {
    let filteredArray: T[] = [];
    for (let i = 0; i < this.length; i++) {
      let value = this[i];
      if (predicate(value, i, this)) {
        filteredArray.push(value);
      }
    }
    return filteredArray;
  }

  kMap<U>(callbackfn: (value: T, index: number, array: T[]) => U): U[] {
    let mappedArray: U[] = [];
    for (let index = 0; index < this.length; index++) {
      mappedArray.push(callbackfn(this[index], index, this));
    }
    return mappedArray;
  }

  kShift(): T | undefined {
    let length = this.length;
    if (length === 0) {
      return undefined;
    }
    let firstItem = this[0];
    for (let index = 0; index < length; index++) {
      this[index] = this[index + 1];
    }
    this.length--;
    return firstItem;
  }

  kUnshift(...items: T[]): number {
    let originLength = this.length;
    let insertLength = items.length;
    let newLength = originLength + insertLength;
    for (let index = newLength - 1; index >= insertLength; index--) {
      this[index] = this[originLength - 1];
      originLength--;
    }
    for (let index = 0; index < insertLength; index++) {
      this[index] = items[index];
    }
    return newLength;
  }

  kReduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => T
  ): T {
    if (this.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    let calculateNum: T = this[0];
    for (let index = 1; index < this.length; index++) {
      calculateNum = callbackfn(calculateNum, this[index], index, this);
    }
    return calculateNum;
  }

  kReverse(): T[] {
    let length = this.length;
    let tempArr: T[] = [];
    for (let index = 0; index < this.length; index++) {
      tempArr[index] = this[--length];
    }
    return tempArr;
  }

  /** 拍平数组 */
  kFlat(depth = 1): T[] {
    function flatten(array: any[], currentDepth: number): any[] {
      let result: any[] = [];

      for (let i = 0; i < array.length; i++) {
        result = result.concat(
          Array.isArray(array[i]) && currentDepth < depth
            ? flatten(array[i] as T[], currentDepth + 1)
            : [array[i]]
        );
      }
      return result;
    }
    return flatten(this, 0);
  }

  kFindIndex(
    predicate: (value: T, index: number, obj: T[]) => boolean
  ): number {
    for (let index = 0; index < this.length; index++) {
      if (predicate(this[index], index, this)) {
        return index;
      }
    }
    return -1;
  }

  kFind(
    predicate: (value: T, index: number, obj: T[]) => boolean
  ): T | undefined {
    for (let index = 0; index < this.length; index++) {
      if (predicate(this[index], index, this)) {
        return this[index];
      }
    }
    return undefined;
  }

  kSome(predicate: (value: T, index: number, array: T[]) => unknown): boolean {
    for (let index = 0; index < this.length; index++) {
      if (predicate(this[index], index, this)) {
        return true;
      }
    }
    return false;
  }

  // TODO
  kSort(compareFn?: (a: T, b: T) => number): this {
    return this;
  }

  kSlice(start?: number, end?: number): T[] {
    let length = this.length;
    let startIndex =
      start === undefined ? 0 : start < 0 ? start + length : start;
    let endIndex = end === undefined ? length : end < 0 ? end + length : end;
    if (startIndex >= endIndex) {
      return [];
    }
    let slicedArr: T[] = [];
    for (let index = startIndex; index < endIndex; index++) {
      slicedArr.push(this[index]);
    }
    return slicedArr;
  }

  kSplice(start: number, deleteCount?: number): T[] {
    let length = this.length;
    let startIndex = start < 0 ? start + length : start;
    let count = deleteCount ?? length - startIndex;

    let deletedArr: T[] = [];
    let deleteArrIndex = startIndex;
    for (let index = 0; index < count; index++) {
      deletedArr.push(this[deleteArrIndex++]);
    }

    for (let index = 0; index < length - count; index++) {
      if (index >= startIndex) {
        this[index] = this[index + count];
      }
    }
    this.length = length - count;
    return deletedArr;
  }
}