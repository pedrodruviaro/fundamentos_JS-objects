const cliente = {
    nome: 'pedro',
    idade: 25,
    cpf: '99911100022',
    email: 'pedro@email.com',
    casado: false
}


//acessando dados via colchetes

const chaves = ['nome', 'idade', 'cpf', 'email']

console.log(cliente[chaves[0]]); //pedro


chaves.forEach(chave => console.log(cliente[chave]))

