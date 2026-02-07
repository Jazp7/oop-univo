class Estudiante {
    public nombre: string
    public carnet: string
    public edad: number
    public carrera: string
    public notaPromedio: number
    public esRegular: boolean

    constructor(nombre: string, carnet: string, edad: number, carrera: string, notaPromedio: number, esRegular: boolean) {
        this.nombre = nombre
        this.carnet = carnet
        this.edad = edad
        this.carrera = carrera
        this.notaPromedio = notaPromedio
        this.esRegular = esRegular
    }

    mostrarDatos(): void {
        console.log("\n----> Datos del estudiante <----")
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Carnet: ${this.carnet}`)
        console.log(`Edad: ${this.edad}`)
        console.log(`Carrera: ${this.carrera}`)
        console.log(`Nota Promedio: ${this.notaPromedio}`)
        console.log(`Es regular?: ${this.esRegular ? "Si" : "No"}`)
        console.log("=================================")
    }
}

const Edgar = new Estudiante("Edgar", "U20258497", 23, "Desarrollo de Software", 9.32, true)
const Kevin = new Estudiante("Kevin", "U20251648", 19, "Desarrollo de Software", 8.9, true)
const Evelin = new Estudiante("Evelin", "U20257812", 19, "Desarrollo de Software", 9.01, true)

Edgar.mostrarDatos()
Kevin.mostrarDatos()
Evelin.mostrarDatos()