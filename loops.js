// TODO: Create an array called numbers with values 1 through 5
const numbers = [1, 2, 3, 4, 5];

// TODO: Write a for loop that prints each number in the array
console.log("For loop - all numbers:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// TODO: Write a while loop that counts down from 5 to 1
console.log("\nWhile loop - countdown:");
let count = 5;
while (count >= 1) {
  console.log(count);
  count--; // decrease by 1 each time
}

// TODO: Create a loop that prints only even numbers from the numbers array
console.log("\nEven numbers only:");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    // % checks remainder - 0 means even
    console.log(numbers[i]);
  }
}

// TODO: Create a loop that calculates the sum of all numbers in the array
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]; // same as sum = sum + numbers[i]
}
console.log("\nSum of all numbers:", sum);
