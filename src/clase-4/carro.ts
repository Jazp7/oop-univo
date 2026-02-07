class Auto {
    marca: string
    modelo: string
    año: number
    color: string
    velocidad: number

    constructor(marca: string, modelo: string, año: number, color: string, velocidad: number) {
        this.marca = marca
        this.modelo = modelo
        this.año = año
        this.color = color
        this.velocidad = velocidad
    }

    arrancar() {
        console.log("El auto esta arrancando...")
    }

    acelerar() {
        console.log(`El ${this.marca} ${this.modelo} esta acelerando!`)
    }

    frenar() {
        console.log("Frenando...")
    }

    mostrarInfo() {
        console.log(`Marca: ${this.marca}`)
        console.log(`Modelo: ${this.modelo}`)
        console.log(`Año: ${this.año}`)
        console.log(`Color: ${this.color}`)
        console.log(`Velocidad: ${this.velocidad}`)
    }
}

const MyCarro = new Auto("Toyota", "Corolla", 2022, "Azul", 120)

MyCarro.arrancar()
MyCarro.acelerar()
MyCarro.frenar()
MyCarro.mostrarInfo()
