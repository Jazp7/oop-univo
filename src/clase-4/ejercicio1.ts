class Perro {
    nombre: string
    raza: string
    edad: number
    color: string

    constructor(nombre: string, raza: string, edad: number, color: string) {
        this.nombre = nombre
        this.raza = raza
        this.edad = edad
        this.color = color
    }

    ladrar() {
        console.log("¡Guau guau!")
    }

    presentarse() {
        console.log(`Hola, me llamo ${this.nombre} y soy un perro de raza ${this.raza}`)
    }

    cumplirAños() {
        console.log(`Feliz cumpleaños ${this.nombre}`)
    }
}

const Firulais = new Perro("Firulais", "Pastor Alemán", 3, "Marrón")

Firulais.ladrar()
Firulais.presentarse()
Firulais.cumplirAños()
