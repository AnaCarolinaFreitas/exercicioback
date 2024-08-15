class pessoa {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
}

const user = new pessoa("Ana", 16, 1.74);
const user1 = new pessoa("Carolina", 16, 1.74);


console.log(user);
console.log(user1);