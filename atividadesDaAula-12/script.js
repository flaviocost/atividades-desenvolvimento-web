//tabuada

const numero = 7
console.log(`---- Tabuada do ${numero} ----`);

for (let i = 1; i<= 10; i++){
    console.log(`${numero} x ${i} = ${numero *i} `);
}

for (let segundos = 5; segundos > 0; segundos--){
    console.log(`lançamento de ${segundos}...`);
}
 
console.log("Decolar") 

//cofrinho

let cofrinho = 0; 
const meta = 50;
let dias = 0;

while (cofrinho < meta){
    dias++;
    cofrinho += 12;
    console.log(`Dias ${dias}: Total guardado R$ ${cofrinho}`);
}

console.log(`Meta atingida em ${dias} dias!`);


//total de compras

const carrinho = [25.50, 10.00, 8.90, 42.00]
let total = 0;

for (const preco of carrinho){
    total += preco;
    console.log(`Adicionando item de R$ ${preco.toFixed(2)}`);
}

console.log(`Valor final de compra: R$ ${total.toFixed(2)}`);

const palavra = "JS";
for (const letra of palavra){
    console.log(letra);
}

//boletim

const boletim = {
    mat: 8.5,
    his: 7.0,
    cien: 9.2,
    port: 6.8
};

for (const materia in boletim){
    console.log(`${materia.toUpperCase}: nota ${boletim[materia]}`)
}