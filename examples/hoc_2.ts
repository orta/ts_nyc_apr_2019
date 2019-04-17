// Go from A -> C via an shared intermediary B
function compose<A, B, C>(f: (arg: A) => B, g: (arg: B) => C): (arg: A) => C {
  return x => g(f(x));
}

// This is an example with lots of "known" types

interface Person {
  name: string;
  age: number;
}

function getDisplayName(p: Person) {
  return p.name.toLowerCase();
}

function getLength(s: string) {
  return s.length;
}

// has type '(p: Person) => number'
const getDisplayNameLength = compose(
  getDisplayName,
  getLength,
);

const person = { name: "Person McPersonface", age: 42 }

// Person -> string -> number
// person -> getDisplayName -> getLength
const nameLength = getDisplayNameLength(person);

