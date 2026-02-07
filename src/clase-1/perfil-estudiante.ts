export class Estudiante {
    public nombre: string
    public carrera: string
    public universidad: string
    
    public edad: number
    public semestre: number
    public notaPromedio: number

    public esRegular: boolean
    public esBecado: boolean

    constructor(nombre: string, carrera: string, universidad: string, edad: number) {
        this.nombre = nombre
        this.edad = edad
        this.carrera = carrera
        this.universidad = universidad

        this.semestre = 1
        this.notaPromedio = 6
        this.esRegular = true
        this.esBecado = false
    }

    public printData(): void {
        console.log("--------------------------------")
        console.log("Nombre: " + this.nombre)
        console.log("Edad: " + this.edad)
        console.log("Carrera: " + this.carrera)
        console.log("Universidad: " + this.universidad)
        console.log("Semestre: " + this.semestre)
        console.log("Nota Promedio: " + this.notaPromedio)
        console.log("¿Es Regular? " + this.esRegular)
        console.log("¿Es Becado? " + this.esBecado)    
        console.log("--------------------------------")
    }
}

const Edgar = new Estudiante("Edgar", "Desarrollo de Software", "UNIVO", 18)
const Gabriel = new Estudiante("Gabriel", "Desarrollo de Software", "UNIVO", 20)

Edgar.printData()
Gabriel.printData()