let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let highestNumber = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > highestNumber) {
    highestNumber = numbers[i];
  }
}
console.log(highestNumber);