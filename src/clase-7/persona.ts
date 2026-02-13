class Persona {
    nombre: string
    apellido: string
    edad: number
    altura: number
    correo: string | null

    constructor(nombre: string, apellido: string, edad: number, altura: number, correo?: string) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura

        if (correo !== undefined) {
            this.correo = correo
        } else {
            this.correo = null
        }
    }

    mostrarInfo(): void {
        console.log(`Hola soy ${this.nombre} ${this.apellido}, y tengo la edad de ${this.edad}`)
        if (this.correo) {
            console.log(`Contactame: ${this.correo}`)
        } else {
            console.log("Esta persona no tiene correo")
        }
    }
}

let persona1 = new Persona("José", "Arístides", 19, 1.9, "aristideszelayax@gmail.com")
let persona2 = new Persona("Kevin", "Armando", 19, 1.8)

persona1.mostrarInfo()
persona2.mostrarInfo()