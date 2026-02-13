class Estudiante {
    nombre: string
    matricula: number
    promedio: number

    constructor(nombre: string, matricula: number, promedio: number = 0) {
        this.nombre = nombre
        this.matricula = matricula
        this.promedio = promedio
    }

    mostrarInfo() {
        console.log(`Estudiante: ${this.nombre} | Matricula: ${this.matricula} | Promedio: ${this.promedio}`)
    }
}

class Curso {
    nombre: string
    docente: string
    cantidadEstudiantes: number

    constructor(nombre: string, docente: string, cantidadEstudiantes: number) {
        this.nombre = nombre
        this.docente = docente
        this.cantidadEstudiantes = cantidadEstudiantes
    }

    mostrarInfoCurso() {
        console.log(`Curso: ${this.nombre} | Docente: ${this.docente} | Cantidad de estudiantes: ${this.cantidadEstudiantes}`)
    }

}

let est1 = new Estudiante("María Martínez", 100201, 8.5)
let est2 = new Estudiante("José Lopéz", 100202, 9.60)
let est3 = new Estudiante("Marta Caceres", 100203, 5)

let curso1 = new Curso("Diseño de Páginas Web - Sección C", "Ing. Karla Cruz", 35)
let curso2 = new Curso("Programación Orientada a Objetos - Sección B", "Ing. Alberto Turcios", 20)

console.log("========== ESTUDIANTES ==========")
est1.mostrarInfo()
est2.mostrarInfo()
est3.mostrarInfo()

console.log("\n========== CURSOS ==========")
curso1.mostrarInfoCurso()
curso2.mostrarInfoCurso()