// Classe abstrata Prototype
class Prototype {
  constructor() {
    if (new.target === Prototype) {
      throw new Error("A classe abstrata 'Prototype' não pode ser instanciada diretamente.");
    }
  }

  // Método abstrato clone
  clone() {
    throw new Error("O método 'clone()' deve ser implementado na subclasse.");
  }
}

// Exemplo de subclasse concreta
class Carro extends Prototype{
  #marca;
  #modelo;
  #ano;
  constructor(marca, modelo, ano){
    super();
    this.#marca = marca;
    this.#modelo = modelo;
    this.#ano = ano;
  }


  clone() {
    return new Carro(this.#marca, this.#modelo, this.#ano);
  }

  getMarca(){
    return this.#marca;
  }
  getModelo(){
    return this.#modelo;
  }
  getano(){
    return this.#ano;
  }

  Exibir(){
    console.log('Carro: ${this.#marca} ${this.#modelo}, Ano: ${this.#ano}')
  }
}


// Testando
const original = new Carro("A", "B", 30);
const copia = original.clone();

console.log(original); 
console.log(copia); 
console.log(original === copia); 
