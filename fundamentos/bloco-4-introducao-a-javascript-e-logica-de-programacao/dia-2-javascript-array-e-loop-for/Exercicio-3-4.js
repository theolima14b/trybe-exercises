let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let i = 0; i < numbers.length; i += 1) {
  result += numbers[i];
}
console.log(result);

let avarage = result / (numbers.length);

if (avarage > 20) {
  console.log(`Valor maior que 20. Precisamente ${avarage}`);
} else {
  console.log(`Valor menor ou igual a 20. Precisamente ${avarage}`);
}