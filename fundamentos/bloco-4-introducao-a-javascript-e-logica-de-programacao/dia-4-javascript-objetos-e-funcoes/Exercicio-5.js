let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};


let newInfo = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

for ( let i in info) {
  if (i === 'recorrente' && info[i] === 'Sim' && newInfo[i] === 'Sim') {
    console.log(`Ambos recorrentes`)
  } else {
    console.log(`${info[i]}e ${newInfo[i]}`)
  }
}


console.log('--------------------------------')


console.log(`${info.personagem} e ${newInfo.personagem}`);
console.log(`${info.origem} e ${newInfo.origem}`);
console.log(`${info.nota} e ${newInfo.nota}`);
console.log(`Ambos recorrentes`)