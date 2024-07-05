//string
let Name: string = "Tom";
console.log('string1:' + Name);
Name = "Maria";
console.log('string2:' + Name);
console.log('-----------------');

//number
let binaryNumber: number = 0b10100;
console.log('number1:' + binaryNumber);
binaryNumber = 0o744;
console.log('number2:' + binaryNumber);
console.log('-----------------');

//boolean
let isDone: boolean = false;
console.log('boolean1:' + isDone);
isDone = true;
console.log('boolean2:' + isDone);
console.log('-----------------');

//null
let n: null = null;
console.log('null:' + n);

//undefined
let u: undefined = undefined;
console.log('undefined:' + u);
console.log('-----------------');

//unknown
let notSure: unknown = 4;
notSure = "maybe a string instead";
console.log('unknown1:' + notSure);
notSure = false;
console.log('unknown2:' + notSure);
console.log('-----------------');

//array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [10, 2, 30, 5];
list2.sort((a, b) => a - b);
console.log(list2);
console.log('-----------------');

let names: string[] = ["Tom", "Maria", "Alisa"];
names.sort((a, b) => a.localeCompare(b));
console.log(names);
console.log(names.length)
console.log('-----------------');

let tuple: [string, number, boolean] = ["Maria", 1, true];
tuple[1] = 3;
tuple.shift();
tuple.pop();
tuple.push(false);
console.log('tuple:' + tuple);
console.log('-----------------');


let owner1: { name: string, age: number } = { name: "Tom", age: 25 };
let owner2: { name: string, age: number } = { name: "Maria", age: 30 };
let owners: object[] = [owner1, owner2];
let car: {model: string, year: number, owners?:object[]} = { model: "Tesla", year: 2020 };
car["owners"] = owners;
console.log(car);
