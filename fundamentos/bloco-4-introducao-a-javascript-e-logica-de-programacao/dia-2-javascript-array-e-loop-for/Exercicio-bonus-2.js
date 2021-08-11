let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício Bônus - 2:
// Ordene o array numbers em ordem decrescente e imprima seus valores;

for (let index = numbers.length - 1; index >= 0; index -= 1) {
  for (let secondIndex = numbers.length ; secondIndex > 0; secondIndex -= 1 ) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);