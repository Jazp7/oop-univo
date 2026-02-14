export class Profesor {
    nombre: string
    especialidad: string
    añosExperiencia: number
    correo: string

    constructor(
        nombre: string,
        especialidad: string,
        añosExperiencia: number,
        correo: string
    ) {
        this.nombre = nombre
        this.especialidad = especialidad
        this.añosExperiencia = añosExperiencia
        this.correo = correo
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
}