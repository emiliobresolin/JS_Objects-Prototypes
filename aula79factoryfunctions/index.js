const falar = {
    falar() {
      console.log(`${this.nome} está falando.`);
    },
  };
  
  const comer = {
    comer() {
      console.log(`${this.nome} está comendo.`);
    },
  };
  
  const beber = {
    beber() {
      console.log(`${this.nome} está bebendo.`);
    },
  };
  
  const pessoaPrototype = Object.assign({}, falar, comer, beber); //aqui é a factory
  
  function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
      nome: { value: nome },
      sobrenome: { value: sobrenome }
    });
  }
  
  const p1 = criaPessoa('Emilio', 'Bresolin');
  const p2 = criaPessoa('Helena', 'Bresolin');
  console.log(p2);