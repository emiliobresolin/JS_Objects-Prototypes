//super class
function Conta(agencia, conta, saldo)
{
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;

}

Conta.prototype.sacar = function(valor)
{
    if(this.saldo < valor)
    {
        console.log('Saldo insuficiente para saque. Saldo: '+`$${this.saldo}. Valor solicitado para saque: $${valor}.`);
        this.verSaldo();
        return;
    }
    console.log(`Valor do saque de $${valor} aprovado.`);
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor)
{
    console.log(`Deposito de $${valor} efetuado.`);
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function()
{
    console.log(`Ag/c.: ${this.agencia}/${this.conta} ¦ ` +
    `Saldo: $${this.saldo.toFixed(2)}`);
};
/*
const conta1 = new Conta(0032,'000111-1',1000);
console.log(conta1);
//console.log(conta1);
conta1.depositar(1000);
//console.log(conta1);
conta1.sacar(500);
//console.log(conta1);
conta1.sacar(5000);
*/
function ContaCorrente(agencia, conta, saldo, limite)
{
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype); //associacao de prototype 1.0
ContaCorrente.prototype.constructor = ContaCorrente; //associacao de prototype 1.1

ContaCorrente.prototype.sacar = function(valor)
{
    if((this.saldo + this.limite) < valor)
    {
        console.log('Saldo insuficiente para saque. Saldo: '+`$${this.saldo}. Valor solicitado para saque: $${valor}.`);
        this.verSaldo();
        return;
    }
    console.log(`Valor do saque de $${valor} aprovado.`);
    this.saldo -= valor;
    this.verSaldo();
};
/*
const cc = new ContaCorrente(103, '000110-1', 1000, 500);
cc.depositar(100);
cc.sacar(100);
cc.sacar(1090);
*/
function ContaPoupanca(agencia, conta, saldo)
{
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype); //associacao de prototype 2.0
ContaPoupanca.prototype.constructor = ContaPoupanca; //associacao de prototype 2.1