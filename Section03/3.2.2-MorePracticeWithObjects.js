// bracket and dot notation
const key = "1";
const obj = {
  key: console.log("the key is 'key'"),
  1: console.log("the key is 1"),
};

// what will the following lines print?
console.log(obj[key]);
// the key is 'key'
// the key is 1
console.log(obj.key);
// 
obj["key"];

// Create an object with at least four properties, each with a different data type.
car = {
  make: "Toyota",
  model: "Tundra",
  year: "2024",
  isFast: "true"
  type : ["Ex", "TSS", "Pro"]
  collection: [7,"orange"]
};
// Name one of the four properties "collection" and set its value to an Array or Object.

// Access a value in the "collection" property
console.log(car.collection[7]);
// Practice with nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];

// Add a method to an Object
obj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};

// Fill in your favorite movie, number and color below
obj["favorites"] = {
  movie: "Juice",
  number: 29,
  color: "black"
};

// Add a list (a.k.a array) to an Object
obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// Using the 'for...in' loop to iterate over 'obj' object ...
// how many lines will the following statement print? 
// 5 lines  
// what do you expect to see on each line?
for (let key in keys) {
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}

// Use a template literal to print a sentence about your favorite things

// Access the values "b", 4, and 6 from obj.list

