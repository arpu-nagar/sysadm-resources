let lucky: number;
lucky = 23;

type Style = 'bold' | 'italic' | 23
let font: Style;

interface Person
{
	first: string;
	last: string;
	[key: string]: any;
}
const person: Person = {
	first: 'Soham',
	last: 'Tiwari'
}
const person2: Person = {
	first: 'Soham',
	last: 'Tiwari',
	fast: true
}

function pow(x: number, y: number): string
{
	return Math.pow(x, y).toString();
}

function pow2(x: number, y: number): void
{
	Math.pow(x, y).toString();
}

// ARRAYS
const arr: number[] = []
arr.push(1)
// arr.push('23')
// arr.push(true)

// TUPLES
type MyList = [number?, string?, boolean?]
const arr2: MyList = []
arr2.push(1)
arr2.push('23')
arr2.push(true)

// GENERICS
class Observable<T>{
	constructor(public value: T)
	{

	}
}

let x: Observable<number>;
let y: Observable<Person>
let z = new Observable('23')