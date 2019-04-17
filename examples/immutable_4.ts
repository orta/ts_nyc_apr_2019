// Works on a few other types

// { readonly a: string, readonly b: number }
type A = Readonly<{ a: string, b: number }>;
declare const a:A

// readonly number[]
type B = Readonly<number[]>;
declare const b:B

// readonly [string, boolean]
type C = Readonly<[string, boolean]>
declare const c:C

