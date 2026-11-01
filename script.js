let valorDaConta = Number.parseFloat(prompt("Informe o valor total da conta: "))
let porcentagemGorjeta = Number.parseFloat(prompt("Informe a porcentagem da gorgeta: "))
let divisaoPorPessoas = Number.parseInt(prompt("Informe para quantas pessoas a conta vai ser dividida: "))

const valorTotal = valorDaConta + porcentagemGorjeta;
const valorPagarPorPessoa = valorDaConta / divisaoPorPessoas;

const valorDaContaFormatado = valorDaConta.toFixed(2);
const valorTotalFormatado = valorTotal.toFixed(2);
const valorPagarPorPessoaFormatado = valorPagarPorPessoa.toFixed(2);
const porcentagemGorjetaFormatado = porcentagemGorjeta.toFixed(2); 


alert(`--- RESUMO DA CONTA ---\nConsumo: R$ ${valorDaContaFormatado}\nGorjeta: R$ ${porcentagemGorjetaFormatado}\nTotal com Gorjeta: R$ ${valorTotalFormatado}\nDivisão por pessoas(${divisaoPorPessoas} pessoas): R$ ${valorPagarPorPessoaFormatado}`);