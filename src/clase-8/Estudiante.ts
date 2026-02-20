import { Curso } from "./Curso"

export class Estudiante {
    nombre: string
    matricula: number
    edad: number
    promedio: number
    carnet: string
    correo: string
    cursos: Curso[]

    constructor(
        nombre: string,
        matricula: number,
        edad: number,
        promedio: number,
        carnet: string,
        correo: string,
        cursos: Curso[] = []
    ) {
        this.nombre = nombre
        this.matricula = matricula
        this.edad = edad
        this.promedio = promedio
        this.carnet = carnet
        this.correo = correo
        this.cursos = cursos
    }

    mostrarInfo() {
        console.log("\n=================== ESTUDIANTE ===========================")
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Matrícula: ${this.matricula}`)
        console.log(`Edad: ${this.edad}`)
        console.log(`Promedio: ${this.promedio}`)
        console.log(`Carnet: ${this.carnet}`)
        console.log(`Correo: ${this.correo}`)
        console.log("==================================================\n")
    }

    estadoAcademico(): string {
        if (this.promedio >= 7) {
            return this.nombre + " esta aprobado"
        } else if (this.promedio === 0) {
            return this.nombre + " aun no tiene promedio"
        } else {
            return this.nombre + " esta en riesgo académico"
        }
    }

    actualizarPromedio(nuevoPromedio: number) {
        this.promedio = nuevoPromedio
        console.log(`Promedio actualizado de ${this.nombre} a ${this.promedio}`)
    }

    agregarCurso(curso: Curso) {
        this.cursos.push(curso)
        console.log(`Curso agregado a ${this.nombre}: ${curso.nombre}`)
    }

    mostrarCursos() {
        if (this.cursos.length === 0) {
            console.log(`${this.nombre} no tiene cursos`) 
        } else {
            console.log(`Cursos de ${this.nombre}:`)
            for (const curso of this.cursos) {
                console.log(`- ${curso.nombre}`)
            }
        }
    }

    cantidadCursos(): number {
        return this.cursos.length
    }
}