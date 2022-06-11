declare function eachAsync<T>(
  collection: Array<T>,
  callbackfn: (value: T, index: number, array: Array<T>) => void
): void;
declare function eachAsync<T>(
  collection: { [key: string]: T},
  callbackfn: (value: T, index: string, object: { [key: string]: T}) => void
): void;
declare function eachAsync<T>(
  collection: { [key: number]: T},
  callbackfn: (value: T, index: number, object: { [key: number]: T}) => void
): void;
export default eachAsync;
