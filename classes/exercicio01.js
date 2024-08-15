class pizza{
    constructor(base, molho, recheio, queijo) {
        this.base = base
        this.molho = molho
        this.recheio = recheio
        this.queijo = queijo
    }
    pedido(){
        console.log(`Olá, gostaria de uma pizza com massa ${this.base}, com molho de ${this.molho}, recheio de ${this.recheio}, e queijo ${this.queijo}`)

    }
}

const pizza1 = new pizza("fina", "tomate", "calabresa", "cheddar")

pizza1.pedido()