export class DataHelper {
  static modelArrayToMap<K, V extends { id: K }>(array: V[] = []): Map<K, V> {
    return new Map<K, V>(
      array.map<[ K, V ]>((v: V): [ K, V ] => [ v.id, v ])
    );
  }
}
