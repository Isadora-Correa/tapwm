function executarAtividades() {
    // ===== EXERCÍCIO 1 - Retângulo =====
    function Retangulo(x, y) {
      this.base = x;
      this.altura = y;
      this.calcularArea = function () {
        return this.base * this.altura;
      };
    }
  
    let base = parseFloat(prompt("Exercício 1\nDigite a base do retângulo:"));
    let altura = parseFloat(prompt("Digite a altura do retângulo:"));
    let ret = new Retangulo(base, altura);
  
    alert("▶ Exercício 1 - Área do Retângulo:\nÁrea = " + ret.calcularArea());
  
    // ===== EXERCÍCIO 2 - Conta, Corrente e Poupança =====
    class Conta {
      constructor() {
        this._nomeCorrentista = "";
        this._banco = "";
        this._numeroConta = "";
        this._saldo = 0;
      }
  
      set nomeCorrentista(nome) { this._nomeCorrentista = nome; }
      get nomeCorrentista() { return this._nomeCorrentista; }
  
      set banco(banco) { this._banco = banco; }
      get banco() { return this._banco; }
  
      set numeroConta(numero) { this._numeroConta = numero; }
      get numeroConta() { return this._numeroConta; }
  
      set saldo(valor) { this._saldo = valor; }
      get saldo() { return this._saldo; }
    }
  
    class Corrente extends Conta {
      constructor() {
        super();
        this._saldoEspecial = 0;
      }
  
      set saldoEspecial(valor) { this._saldoEspecial = valor; }
      get saldoEspecial() { return this._saldoEspecial; }
    }
  
    class Poupanca extends Conta {
      constructor() {
        super();
        this._juros = 0;
        this._dataVencimento = "";
      }
  
      set juros(valor) { this._juros = valor; }
      get juros() { return this._juros; }
  
      set dataVencimento(data) { this._dataVencimento = data; }
      get dataVencimento() { return this._dataVencimento; }
    }
  
    // Conta Corrente
    let corrente = new Corrente();
    corrente.nomeCorrentista = prompt("Exercício 2\nConta Corrente - Nome:");
    corrente.banco = prompt("Banco:");
    corrente.numeroConta = prompt("Número da conta:");
    corrente.saldo = parseFloat(prompt("Saldo:"));
    corrente.saldoEspecial = parseFloat(prompt("Saldo especial:"));
  
    alert("▶ Conta Corrente:\n" +
          "Nome: " + corrente.nomeCorrentista + "\n" +
          "Banco: " + corrente.banco + "\n" +
          "Conta: " + corrente.numeroConta + "\n" +
          "Saldo: R$ " + corrente.saldo.toFixed(2) + "\n" +
          "Saldo Especial: R$ " + corrente.saldoEspecial.toFixed(2));
  
    // Conta Poupança
    let poupanca = new Poupanca();
    poupanca.nomeCorrentista = prompt("Conta Poupança - Nome:");
    poupanca.banco = prompt("Banco:");
    poupanca.numeroConta = prompt("Número da conta:");
    poupanca.saldo = parseFloat(prompt("Saldo:"));
    poupanca.juros = parseFloat(prompt("Juros (%):"));
    poupanca.dataVencimento = prompt("Data de vencimento (dd/mm/aaaa):");
  
    alert("▶ Conta Poupança:\n" +
          "Nome: " + poupanca.nomeCorrentista + "\n" +
          "Banco: " + poupanca.banco + "\n" +
          "Conta: " + poupanca.numeroConta + "\n" +
          "Saldo: R$ " + poupanca.saldo.toFixed(2) + "\n" +
          "Juros: " + poupanca.juros + "%\n" +
          "Vencimento: " + poupanca.dataVencimento);
  }
  