class Cuentabancario {
    titulo: string
    saldo: number
    
    constructor(titulo: string, saldo: number) {
        this.titulo = titulo
        this.saldo = saldo
    }

    depositar(cantidad: number) {
        this.saldo += cantidad 
        console.log(`Se han depositado: $${cantidad}`)
        console.log(`El saldo actual es: $${this.saldo}`)
    }

    retirar(cantidad: number) {
        this.saldo -= cantidad
        console.log(`Se han retirado: $${cantidad}`)
        console.log(`El saldo actual es: $${this.saldo}`)
    }

}

const MiCuenta = new Cuentabancario("Cuenta de ahorros", 1000)

MiCuenta.depositar(500)
MiCuenta.retirar(200)