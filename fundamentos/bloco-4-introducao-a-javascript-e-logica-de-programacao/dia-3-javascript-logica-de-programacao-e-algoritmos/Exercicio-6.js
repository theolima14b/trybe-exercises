const isPrime = 7;
let counter = 1;


for ( let number = 1; number <= isPrime -1; number += 1) {
  if (isPrime % number === 0) {
    counter += 1;
  }
}

if (counter === 2) {
  console.log(`O número ${isPrime} é primo`)
} else {
  console.log(`O número ${isPrime} não é primo`)
}
