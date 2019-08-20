try {
  myFunc();
} catch (e) {
  console.log(`${e.message} try a different function`);
} finally {
  console.log("Program Continues");
}
///

const user = { email: "jdoe@gmail.com" };
try {
  if (!user.email) {
    throw "User has no name";
  } else {
    console.log("continue");
  }
} catch (e) {
  console.log(e);
}
///
// Iterator example
const nameIterator = names => {
  let nextIndex = 0;
  return {
    next: () => {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    }
  };
};
//create array of names
const namesArr = ["billy", "mike", "jack"];
// init iterator and pass in the names array
const names = nameIterator(namesArr);
console.log(names.next());

///
//Symbols
const sym1 = Symbol();
const sym2 = Symbol("sym2");

console.log(sym1);

//
// Destructuring
let a, b;
[a, b] = [100, 200];
console.log(a);
//rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];
console.log(rest);
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
console.log(rest);

const people = ["John", "Billy", "James"];
const [person1, person2, person3] = people;
console.log(people);

//Object destructuring
const person = {
  name: "Billy",
  age: 24,
  city: "melbourne",
  gender: "male"
};

const { name, age, city } = person;
console.log(name, age, city);

//Maps = key value pairs - can use any type as key or value
const map1 = new Map();

//set keys
const key1 = "some string",
  key2 = {},
  key3 = () => {};

//set map value by key
map1.set(key1, "value of key 1");
map1.set(key2, "value of key2");
map1.set(key3, "value of key3");

//Iterating maps - convert to array
const keyValArr = Array.from(map1);
console.log(keyValArr);
