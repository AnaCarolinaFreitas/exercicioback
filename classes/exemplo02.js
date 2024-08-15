class pessoa {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    seApresentar(){
        console.log(`Olá! Meu nome é ${this.nome}, tenho ${this.idade} anos e tenho ${this.altura}`)
    }
}

const user = new pessoa("Ana", 16, 1.74);
const user1 = new pessoa("Carolina", 16, 1.74);

user.seApresentar()
user1.seApresentar()


