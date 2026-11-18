//1° Questão

for(let i = 1; i <= 30; i++){
    if(i % 3 == 0){
        console.log(i)
  }
}

//2° Questão

for(let segundos = 10; segundos > 0; segundos--){
  console.log(segundos);
}

//3° Questão

let saldoConta = 500;
let saque = 65;

while (saldoConta >= saque){
    saldoConta -= saque;
    console.log(`Saque efetuado: R$ ${saque.toFixed(2)} | Saldo restante: R$ ${saldoConta}.`)  
}

//4° Questão

let pesos = [89.5, 48.0, 109.5, 34.0, 77.0, 56.5];

for(peso of pesos){
    if(peso < 50.0){
        console.log(`Abaixo do peso com ${peso}`)
    }
}

//5° Questão

let palavra = "Meu pé de laranja lima";

for(frase of palavra){
    console.log(frase)
}