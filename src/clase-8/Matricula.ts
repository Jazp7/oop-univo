import { Estudiante } from "./Estudiante"
import { Curso } from "./Curso"
import { Profesor } from "./Profesor"

export class Matricula {
    estudiante: Estudiante
    curso: Curso
    profesor: Profesor
    estado: string
    fechaInscripcion: Date
    historialEstados: string[]

    constructor(
        estudiante: Estudiante,
        curso: Curso,
        profesor: Profesor,
        fechaInscripcion: Date,
        estado: string,
        historialEstados: string[] = []
    ) {
        this.estudiante = estudiante
        this.curso = curso
        this.profesor = profesor
        this.fechaInscripcion = fechaInscripcion
        this.estado = estado
        this.historialEstados = historialEstados
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
        this.historialEstados.push(nuevoEstado)

        console.log(`Estado de ${this.estudiante.nombre} en el curso ${this.curso.nombre} ha cambiado de ${estadoAnterior} a ${nuevoEstado}`)
    }

    estaActiva() {
        if (this.estado === "Activa") {
            return this.estudiante.nombre + " tiene una matricula activa en el curso: " + this.curso.nombre
        } else {
            return this.estudiante.nombre + " no tiene una matricula activa en el curso: " + this.curso.nombre
        }
    }

    mostrarHistorialEstados() {
        if (this.historialEstados.length === 0) {
            console.log(`${this.estudiante.nombre} en ${this.curso.nombre} no tiene cambios de estados`)
        } else {
            console.log(`${this.estudiante.nombre} en ${this.curso.nombre} - Tiene el siguiente Historial de Estados: `)
            for (let i = 0; i < this.historialEstados.length; i++) {
                console.log(`- ${this.historialEstados[i]}`)
            }
        }
    }
}