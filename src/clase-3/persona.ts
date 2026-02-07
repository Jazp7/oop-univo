class Persona {
    public nombre: string
    public edad: number
    public altura: number
    public carrera: string

    constructor(nombre: string, edad: number, altura: number, carrera: string) {
        this.nombre = nombre
        this.edad = edad
        this.altura = altura
        this.carrera = carrera
    }

    mostrarInfo(): void {
        console.log("Nombre: " + this.nombre)
        console.log("Edad: " + this.edad)
        console.log("Altura: " + this.altura)
        console.log("Carrera: " + this.carrera)
    }
}

const Aristides = new Persona("Aristides", 19, 1.95, "Desarrollo de Software")
const Kevin = new Persona("Kevin", 20, 1.80, "Desarrollo de Software")

console.log(Aristides.edad)

Aristides.edad = 23

Kevin.mostrarInfo()
