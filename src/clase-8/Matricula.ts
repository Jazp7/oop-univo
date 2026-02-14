import { Estudiante } from "./Estudiante"
import { Curso } from "./Curso"
import { Profesor } from "./Profesor"

export class Matricula {
    estudiante: Estudiante
    curso: Curso
    profesor: Profesor
    estado: string
    fechaInscripcion: Date

    constructor(
        estudiante: Estudiante,
        curso: Curso,
        profesor: Profesor,
        fechaInscripcion: Date,
        estado: string
    ) {
        this.estudiante = estudiante
        this.curso = curso
        this.profesor = profesor
        this.fechaInscripcion = fechaInscripcion
        this.estado = estado
    }

    mostrarInfo() {
        console.log("\n=================== MATRICULA ===========================")
        console.log(`Estudiante: ${this.estudiante.nombre}`)
        console.log(`Curso: ${this.curso.nombre}`)
        console.log(`Profesor: ${this.profesor.nombre}`)
        console.log(`Fecha: ${this.fechaInscripcion}`)
        console.log(`Estado: ${this.estado}`)
        console.log("==================================================\n")
    }

    cambiarEstado(nuevoEstado: string) {
        let estadoAnterior = this.estado
        this.estado = nuevoEstado

        console.log(`Estado de ${this.estudiante.nombre} en el curso ${this.curso.nombre} ha cambiado de ${estadoAnterior} a ${nuevoEstado}`)
    }

    estaActiva() {
        if (this.estado === "Activa") {
            return this.estudiante.nombre + " tiene una matricula activa en el curso: " + this.curso.nombre
        } else {
            return this.estudiante.nombre + " no tiene una matricula activa en el curso: " + this.curso.nombre
        }
    }
}