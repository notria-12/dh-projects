const json = require('./json')
const { listarPets, cadastrarPet, servicosPrestados, cadastrarPetsDoJsonSpreadOperator, filtraPetPorNome, naoVacinados, vacinados, tosarPet, darBanhoNoPet, removerPet, atualizaPet } = require('./funcoes-pets')

// relembrando criação de uma variável com let recebendo valor de uma string
let organizacao = 'Petshop Node';

// criando um array contendo objetos, onde, a idéia deste array é criar uma lista de animais
// de modo que cada objeto irá representar um animal dentro da nossa lista de pets
let pets = [
    {
        id: 1,
        nome: 'Yoshi',
        tipo: 'cachorro',
        raca: 'Akita inu',
        idade: 6,
        genero: 'Masculino',
        vacinado: true,
        servicos: []
    },
    {
        id: 2,
        nome: 'Pituco',
        tipo: 'pássaro',
        raca: 'calopsita',
        idade: 3,
        genero: 'Fêmea',
        vacinado: false,
        servicos: []
    }
];


// listarPets(pets)

let objPetTeste = {
    nome: 'Novo Pet 2',
    tipo: 'desconhecido',
    raca: 'desconhecido',
    idade: 3,
    genero: 'desconhecido',
    vacinado: false
};

// cadastrarPet(pets, objPetTeste)

let objPet = {
    nome: 'Novo Pet',
    tipo: 'desconhecido',
    raca: 'desconhecido',
    idade: 3,
    genero: 'desconhecido',
    vacinado: false
};

let objPet2 = {
    nome: 'Novo Pet 2',
    tipo: 'desconhecido',
    raca: 'desconhecido',
    idade: 3,
    genero: 'desconhecido',
    vacinado: false
};

// essas chamadas as funções abaixo servem para executarmos as mesmas e estão comentadas, mas, 
// para conseguirem executar é só tirar o comentário de cada uma delas.
// cadastrarPet(objPet)
// cadastrarPet(objPet2)

// listarPets()


// naoVacinados(pets)
// vacinados(pets)

// servicosPrestados(pets[0], darBanhoNoPet)
// servicosPrestados(pets[0], tosarPet)


// console.log(cadastrarPetsDoJsonSpreadOperator(pets, json))

// console.log(filtraPetPorNome(pets, 'Yoshi'))

// removerPet(pets, 1)

let objetoPetAtualizado = {
    nome: "Atualizando Nome",
    tipo: "Atualizando Tipo",
    raca: "siames",
    idade: 3,
    genero: "Fêmea",
    vacinado: false
}

// atualizaPet(pets, 2, objetoPetAtualizado)