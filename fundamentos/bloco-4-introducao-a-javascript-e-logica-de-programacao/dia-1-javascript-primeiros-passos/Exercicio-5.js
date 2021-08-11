let a = 30;
let b = 60;
let c = 90;

let angles = a + b + c;
let anglesPositive = a > 0 && b > 0 && c > 0;

if(anglesPositive){
  if (angles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: Os valores dos ângulos ferem a condição de existência de um triângulo');
};
