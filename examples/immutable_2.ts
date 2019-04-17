// Jump through the type definitions
// to see how Array and ReadonlyArray are build

const immutableTwo = (readArr: ReadonlyArray<string>, arr: Array<string>) => {
  readArr.slice();        // okay
  readArr.push("hello!"); // error!

  arr.push()
}

// TBH ReadonlyArray<string> is meh 
//
const immutableTwoBetter = (readArr: readonly string[]) => {
  readArr.slice();        // okay
  readArr.push("hello!"); // error!
}

