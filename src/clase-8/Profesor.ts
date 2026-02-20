import { Curso } from "./Curso"

export class Profesor {
    nombre: string
    especialidad: string
    añosExperiencia: number
    correo: string
    cursos: Curso[]

    constructor(
        nombre: string,
        especialidad: string,
        añosExperiencia: number,
        correo: string,
        cursos: Curso[] = []
    ) {
        this.nombre = nombre
        this.especialidad = especialidad
        this.añosExperiencia = añosExperiencia
        this.correo = correo
        this.cursos = cursos
    }

    mostrarInfo() {
        console.log("\n=================== PROFESOR ===========================")
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Especialidad: ${this.especialidad}`)
        console.log(`Años de experiencia: ${this.añosExperiencia}`)
        console.log(`Correo: ${this.correo}`)
        console.log("==================================================\n")
    }

    esExperimentado() {
        if (this.añosExperiencia > 5) {
            return this.nombre + " es un profesor experimentado"
        } else {
            return this.nombre + " es un profesor en desarrollo profesional"
        }
    }

    agregarCurso(curso: Curso) {
        this.cursos.push(curso)
        console.log(`${this.nombre} asignado al curso: ${curso.nombre}`)
    }

    mostrarCursos() {
        if (this.cursos.length === 0) {
            console.log(`${this.nombre} no tiene ningun curso asignado!`)
        } else {
            console.log(`${this.nombre} impartira ${this.cursos.length} curso(s):`)
            this.cursos.forEach(curso => {
                console.log(`- ${curso.nombre}`)
            })
        }
    }

    resumen(): string {
        if (this.cursos.length === 0) {
            return `${this.nombre} | ${this.especialidad} | Sin cursos asignados`
        } else {
            return `${this.nombre} | ${this.especialidad} | Tiene asignado: ${this.cursos.length} curso(s)`
        }
    }
}