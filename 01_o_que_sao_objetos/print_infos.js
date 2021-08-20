const cliente = {
    nome: 'pedro',
    idade: 25,
    cpf: '99911100022',
    email: 'pedro@email.com',
    casado: false
}

// Acessando dados com dot notation

console.log(cliente.nome.toUpperCase());
console.log(cliente.nome.split('').join(' '));  //pedro => ['p','e','d','r','o'] => p e d r o       