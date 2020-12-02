function fabricarPessoa(nome, sobrenome){
  function nomeCompleto(){
    return `${nome} ${sobrenome}`
  }

  return {
    nome, sobrenome, nomeCompleto
  }
}

const pessoaA = fabricarPessoa('Gustavo', 'Feri')
console.log(pessoaA.nomeCompleto())