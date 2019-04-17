// Same as before A -> B -> C
function boxCompose<A, B, C>(f: (arg: A) => B, g: (arg: B) => C): (arg: A) => C {
  return x => g(f(x));
}

// An interface which says that it "holds" something
interface Box<T> {
  value: T;
}

// For example:
//
// const stringBox: Box<string> = {
//   value: ""
// } 

// A function which takes any object and makes it into an array version
// of itself
function makeArray<T>(x: T): T[] {
  return [x];
}

// Watch how changing the value changes the entire type
// const numberArray = makeArray()



// Does the same, but for our Box
function makeBox<U>(value: U): Box<U> {
  return { value };
}

// Watch how changing the value changes the entire type
// const numberArray = makeBox()


// OK, this is them _both_ combined
// and the change in 3.4 is that it can correctly pass the types through
 
// has type '(arg: {}) => Box<{}[]>'
const makeBoxedArray = boxCompose(
  makeArray,
  makeBox,
)

makeBoxedArray("hello!").value[0].toUpperCase();
