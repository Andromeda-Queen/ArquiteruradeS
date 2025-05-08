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
class Pessoa extends Prototype {
  constructor(nome, idade) {
    super();
    this.nome = nome;
    this.idade = idade;
  }

  clone() {
    return new Pessoa(this.nome, this.idade);
  }
}

// Testando
const original = new Pessoa("Lucas", 30);
const copia = original.clone();

console.log(original); // Pessoa { nome: 'Lucas', idade: 30 }
console.log(copia);    // Pessoa { nome: 'Lucas', idade: 30 }
console.log(original === copia); // false (objetos diferentes)
