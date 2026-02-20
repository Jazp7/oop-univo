import { Estudiante } from "./Estudiante"

export class Curso {
    nombre: string
    codigo: string
    unidades: number
    capacidad: number
    aula: string
    estudiantes: Estudiante[]

    constructor(
        nombre: string,
        codigo: string,
        unidades: number,
        capacidad: number = 40,
        aula?: string,
        estudiantes: Estudiante[] = []
    ) {
        this.nombre = nombre
        this.codigo = codigo
        this.unidades = unidades
        this.capacidad = capacidad
        this.aula = aula || "Sin asignar"
        this.estudiantes = estudiantes
    }

    mostrarInfo() {
        console.log("\n=================== CURSO ===========================")
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Código: ${this.codigo}`)
        console.log(`Unidades: ${this.unidades}`)
        console.log(`Capacidad: ${this.capacidad}`)
        console.log(`Aula: ${this.aula}`)
        console.log("==================================================\n")
    }

    estaLleno(cantidadActual: number) {
        let espaciosLibres = this.capacidad - cantidadActual

        if (espaciosLibres <= 0) {
            return this.nombre + " esta lleno"
        } else if (espaciosLibres <= 5) {
            return this.nombre + " esta casi lleno y quedan: " + espaciosLibres + " espacios"
        } else {
            return this.nombre + " tiene espacio, y quedan: " + espaciosLibres + " espacios"
        }
    }

    agregarEstudiante(estudiante: Estudiante) {
        if (this.estudiantes.length >= this.capacidad) {
            console.log(`No se puede agregar a ${estudiante.nombre}, el curso ${this.nombre} esta lleno`)
            return
        } else {
            this.estudiantes.push(estudiante)
            console.log(`Estudiante agregado a ${this.nombre}: ${estudiante.nombre}`)
        }
    }

    mostrarEstudiantes() {
        console.log(`\n=================== ESTUDIANTES DE ${this.nombre} ===========================`)
        this.estudiantes.forEach(estudiante => {
            console.log(`- ${estudiante.nombre}`)
        })
    }
}