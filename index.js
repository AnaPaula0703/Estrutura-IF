console.log(`Trabalhando com condicionais.`);

console.log(`Estilos oferecidos: `);

const listaDeDestinos = new Array(
  "Noruega", //0
  "Paris", //1
  "Tóquio", //2
  "Barcelona", //3
  "Los Angeles", //4
);
console.log(listaDeDestinos);

const idadeComprador = 16;
const menorAcompanhado = true;

if (idadeComprador >= 18 ){
  console.log(`Comprador maior de idade, poderá viajar.`);
  console.log(`O destino escolhido foi: ${listaDeDestinos[4]}`);
}

if (idadeComprador < 18 && menorAcompanhado == true) {
      console.log(
      `O menor encontra-se acompanhado, então ele pode realizar a viagem`,
    );
    console.log(`O destino escolhido foi: ${listaDeDestinos[2]}`);
}
  
 else if(idadeComprador <18 && menorAcompanhado == false) {
    console.log(`O comprador é menor de idade e não está acompanhando.`);
  }