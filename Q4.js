const custo = 3000
const desconto = custo * (10 / 100)

const valorDeVenda = custo - desconto
const valorParcelado = custo / 3

console.log(valorDeVenda)
console.log(`Valor parcela em 3x ${valorParcelado}`)