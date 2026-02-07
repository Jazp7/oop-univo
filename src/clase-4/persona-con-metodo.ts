class Persona {
    nombre: string
    edad: number
    altura: number
    peso: number
    
    constructor(nombre: string, edad: number, altura: number, peso: number) {
        this.nombre = nombre
        this.edad = edad
        this.altura = altura
        this.peso = peso
    }

    saludar() {
        console.log("HOLLAAAAAA")
    }

    despedirse() {
        console.log("ADIOOOOS")
    }
}

const Julio = new Persona("Julio", 22, 1.75, 75)

Julio.saludar()
Julio.despedirse()

