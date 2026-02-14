export class Curso {
    nombre: string
    codigo: string
    unidades: number
    capacidad: number
    aula: string

    constructor(
        nombre: string,
        codigo: string,
        unidades: number,
        capacidad: number = 40,
        aula?: string
    ) {
        this.nombre = nombre
        this.codigo = codigo
        this.unidades = unidades
        this.capacidad = capacidad
        this.aula = aula || "Sin asignar"
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
}