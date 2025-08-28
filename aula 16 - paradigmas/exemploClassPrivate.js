//Paradigmas e Modelagem
class ContaBancaria {
    #saldo = 0; //atributo privado
    depositar(valor){
        this.#saldo += valor ;
    }
    verSaldo(){
        console.log(`Saldo: R$ ${this.#saldo}`);
    }
   
}
 
 const conta = new ContaBancaria ();
 conta.depositar(10000000);
 conta.verSaldo();
 
 