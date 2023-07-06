export function keys<K,V>(map:Map<K,V>):K[]{
    let keys:K[]=[];
    map.forEach((_,key)=>keys.push(key));
    return keys;
}

export function values<K, V>(map: Map<K, V>): V[] {
  let values: V[] = [];
  map.forEach((value) => values.push(value));
  return values;
}