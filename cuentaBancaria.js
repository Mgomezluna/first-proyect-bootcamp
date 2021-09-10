
function CuentaBancaria(saldo, movimientos = []) {
    this.movimientos = movimientos
    this.saldo = saldo
    this.agregarDinero = function (dinero) {
        this.movimientos = [...this.movimientos, {tipo: "Credito", plata: dinero}]
        this.saldo += dinero
        console.log(this.movimientos)
        console.log(this.saldo)
    }
    this.debitarDinero = function (dinero) {
        if (dinero < saldo) {
        this.movimientos = [...this.movimientos, {tipo: "Debito", plata: dinero}]
        this.saldo -= dinero
        console.log(this.movimientos)
        console.log(this.saldo)
        } else {
            console.log('Su dinero es insuficiente para realizar esta operación')
        }
    }
}

let cuentaNueva = new CuentaBancaria(500)

 cuentaNueva.agregarDinero(100)     
 cuentaNueva.debitarDinero(1000)
 cuentaNueva.debitarDinero(100) 

const movimientosDebito = (cuenta) => {
    const arr = cuenta.movimientos.filter(mov => mov.tipo == "Debito")
    console.log(arr)
}

const movimientosCredito = (cuenta) => {
    const arr = cuenta.movimientos.filter(mov => mov.tipo == "Credito")
    console.log(arr)
}

movimientosDebito(cuentaNueva)