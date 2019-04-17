// Jump through the type definitions
// to see how Array and ReadonlyArray are build

const immutable = (readArr: ReadonlyArray<string>, arr: Array<string>) => {
  readArr.slice();        // okay
  readArr.push("hello!"); // error!

  arr.push()
}
