let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

for ( let i in info ) {
  console.log(i);
}

console.log('--------------------------------')

for (let i in info) {
  console.log(info[i]);
}