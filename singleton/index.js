/*
  Garantir a existencia de apenas uma instancia e
  ela nao pode ser modificada (imutabilidade)
*/

// ----------Certo----------
const Veiculo = {
  rodas: 0,
  portas: 0
}

const novoVeiculo = Object.create(Veiculo)
novoVeiculo.portas = 4
novoVeiculo.rodas = 4

console.log('novoVeiculo: ', novoVeiculo)

const novoVeiculo_2 = Object.create(Veiculo)
novoVeiculo_2.portas = 0
novoVeiculo_2.rodas = 2

console.log('novoVeiculo_2: ', novoVeiculo_2)

// ----------Errado----------
const automovel_1 = {
  portas: 4,
  rodas: 4
}

console.log('automovel_1: ', automovel_1)

const automovel_2 = automovel_1

automovel_1.rodas = 2
automovel_1.portas = 0

console.log('automovel_2: ', automovel_2)