// + -- > -
// * -- > +
// - -- > /
// / -- > *
// For only 10% of time

let randomNumber = Math.random() * 100; // 0 - 100
let a = prompt("Enter first number: ");
let operator = prompt("Enter operator: ");
let b = prompt("Enter second number: ");

let obj = {
  "+": "-",
  "-": "+",
  "*": "/",
  "/": "*",
};

if (randomNumber < 10) {
  alert(`The result is ${eval(`${a} ${operator} ${b}`)}`);
}

else {
    c= obj[c]
    alert(`The result is ${eval(`${a} ${operator} ${b}`)}`);
}
