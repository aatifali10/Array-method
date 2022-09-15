// 10 most usefull method of Array

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 1 . forEach()
// description: This method can help you to loop of every array's items
// this always use in Array

const value = [
  { name: "apple", price: 200 },
  { name: "Mango", price: 300 },
  { name: "Orange", price: 100 },
];
num.forEach((item) => {
  console.log(num);
});

value.forEach((item) => {
  console.log(item.price);
});
// 2. includes()
// description: This method check if array includes the item passed in the method

let match = num.includes(5);
console.log(match);

// 3. filter()
// description:This method create new array with only elemens passed condition inside the provided funcation

const greaterThen = num.filter((num) => num > 2);
console.log(greaterThen);

// 4.map();
// description: This method create new array by calling the provided function in ervery element

const map = num.map((num) => num + 10);
console.log(map);

// 5.reduce()
// desc: The reduce method applies a function against an accumlator and each element in  the array ( from left to right) to rduce it to a single value

const reduce = num.reduce((itemsValue, value) => itemsValue + value, 0);
console.log(reduce);

// 6.some()
// desc: This method check if at least one of array's item passed the condition if passsed , it return "true" otherwise "false"
const some = num.some((num) => num > 4);
console.log(some);

// 7. every()
// desc: This method check if all array's item passed the condition if passed, it return "true" otherwise "false"
const every = num.every((num) => num < 20);
console.log(every);
