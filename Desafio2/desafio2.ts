

interface IPessoa {
    nome: string,
    idade: number,
    profissao: Profissao,
}
enum Profissao {
    Atriz,
    Padeiro,
    
}


let pessoa1: IPessoa = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz
}

let pessoa2: IPessoa = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro
}

let pessoa3: IPessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4: IPessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}