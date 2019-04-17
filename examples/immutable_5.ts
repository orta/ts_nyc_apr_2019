// Doesn't work for a everything
// It is not a general-purpose type operator.

let err1: readonly Set<number>; // error!
let err2: readonly Array<boolean>; // error!

let okay: readonly boolean[]; // works fine
