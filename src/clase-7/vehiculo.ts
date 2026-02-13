class Vehiculo {
    marca: string
    modelo: string
    año: number
    color: string
    kilometraje: number

    constructor(marca: string, modelo: string, año: number, color?: string, kilometraje?: number) {
        this.marca = marca
        this.modelo = modelo
        this.año = año

        if (color !== undefined) {
            this.color = color
        } else {
            console.log("No se sabe el color del vehículo")
            this.color = ""
        }

        if (kilometraje !== undefined) {
            this.kilometraje = kilometraje
        } else {
            this.kilometraje = 0
        }
    }

    mostrarDetalles() {
        console.log("\n==========================================")
        console.log("INFORMACIÓN DEL VEHÍCULO")
        console.log(`Marca: ${this.marca}`)
        console.log(`Modelo: ${this.modelo}`)
        console.log(`Año: ${this.año}`)
        console.log(`Color: ${this.color}`)
        console.log(`Kilometraje: ${this.kilometraje}`)
        console.log("==========================================\n")
    }
}

let vehiculo1 = new Vehiculo("Toyota", "Tacoma", 2026, "Negro", 15)
let vehiculo2 = new Vehiculo("Chevrolet", "Suburban", 2025, undefined, 15000)
let vehiculo3 = new Vehiculo("Ford", "Ranger", 2022)

vehiculo1.mostrarDetalles()
vehiculo2.mostrarDetalles()
vehiculo3.mostrarDetalles()