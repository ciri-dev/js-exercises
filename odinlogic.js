function add7(number) {
    return number + 7;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function lastLetter(str) {
    return str.at(-1);
}

let answer = 20;

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

console.log(add7(70));
console.log(multiply(6,5));
console.log(capitalize("abcd"));
console.log(lastLetter("add"));