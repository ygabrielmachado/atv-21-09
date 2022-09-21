const mumVendas = Number(prompt("Valor total da vendas: "))
const salario = 1200

const comissao = mumVendas * 0.15
const total = comissao + salario
alert(`Comissao R$: ${comissao.toFixed(2)}\nl
Salario R$: ${total.toFixed(2)}`)