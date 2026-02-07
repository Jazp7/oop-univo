class Producto {
    public nombre: string
    public precio: number
    public stock: number
    public estaDisponible: boolean

    constructor(nombre: string, precio: number, stock: number, estaDisponible: boolean) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.estaDisponible = estaDisponible
    }

    public showData(): void {
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Precio: ${this.precio}`)
        console.log(`Stock: ${this.stock}`)
        console.log(`Disponible: ${this.estaDisponible}`)
    }
}

const Aguacate = new Producto("Aguacate", 100, 10, true)
const Pan = new Producto("Pan", 100, 10, true)

Aguacate.showData()
console.log("\n")
Pan.showData()