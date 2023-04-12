// Factory functions / Constructor functions / Classes
function Pessoa(nome, sobrenome) 
{
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);//trava o object uma vez q ele é criado
}

const p1 = new Pessoa('Emilio', 'Bresolin');
const p2 = new Pessoa('Helena', 'Bresolin');

console.log(p1);
console.log(p2);