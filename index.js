console.log(`Trabalhando com condicionais`);

console.log(`Destinos oferecidos`);

const listaDeDestinos = new Array(
  `Kyoto`,
  `Texas`,
  `Polonia`,
  `shenzhen`,
  `moscou`

);

console.log(listaDeDestinos);

const idadeComprador = 19;
const menorAcompanhado = true;

if (idadeComprador < 18 && menorAcompanhado == true) {

  if(idadeComprador >= 18){
 console.log(`comorador maior de idade, destino selecionado foi ${listaDeDestino[4]}`);
  }

  if(idadeComprador < 18 && menorAcompanhado == true){

    console.log(`O menor encontra-se acompanhado, então ele pode realizar a viagem`);
  
  console.log(`O destino escolhido foi: ${listaDeDestinos[4]}`);
}

else if (idadeComprador <18 && menorAcompanhado == false) {
  console.log("O comprador é menor e não está acompanhado");
}
}
