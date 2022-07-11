// // Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

enum Profissao {
    Atriz = "Atriz",
    Padeiro = "Padeiro",
}

interface Pessoas {
    nome: string,
    idade: number,
    profissao: Profissao
}

let pessoa1: Pessoas = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
}

let pessoa2: Pessoas = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
}

let pessoa3: Pessoas = {
    nome: 'Laura',
    idade: 32,
    profissao: Profissao.Atriz 
}

let pessoa4: Pessoas = {
    nome: 'Carlos',
    idade: 19,
    profissao: Profissao.Padeiro
}


let array = [pessoa1, pessoa2, pessoa3, pessoa4]

console.log(array);