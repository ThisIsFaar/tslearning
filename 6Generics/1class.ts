class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let strObj = new KeyValuePair<number, string>(1, 'apple');
