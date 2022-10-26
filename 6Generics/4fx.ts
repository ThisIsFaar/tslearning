class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

ArrayUtils.wrapInArray<string>('hi');
