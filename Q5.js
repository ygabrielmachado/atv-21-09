const vendas = Number(prompt("Valor total da vendas: "))
const salario_fixo = 1200

const comissao = vendas * 0.15
const salario_total = comissao + salario_fixo
alert(`Comissao R$: ${comissao.toFixed(2)}\n
Salario R$: ${salario_total.toFixed(2)}`)