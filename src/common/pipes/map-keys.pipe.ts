import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mapKeys' })

export class MapKeysPipe<K = any, V = any> implements PipeTransform {
  public transform(map: Map<K, V> = new Map<K, V>()): K[] {
    const keys: K[] = [];
    const iterator: IterableIterator<K> = map.keys();
    let item: IteratorResult<K> = iterator.next();

    while (!item.done) {
      keys.push(item.value);
      item = iterator.next();
    }

    return keys;
  }
}
