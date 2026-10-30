let valorTotalDaConta = prompt("Informe o valor total da conta: ")
let quantidadeDePessoas = prompt("Informe em quantas pessoas a conta vai ser dividida: ")


let divisao = valorTotalDaConta / quantidadeDePessoas;

alert(`---RESUMO DA CONTA---\nConsumo: R$ ${valorTotalDaConta}\nDivisão por pessoas(${quantidadeDePessoas} pessoas): R$ ${divisao.toFixed(divisao)}`)