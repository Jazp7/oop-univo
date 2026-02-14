// Clases
import { Estudiante } from "./Estudiante"
import { Curso } from "./Curso"
import { Profesor } from "./Profesor"
import { Matricula } from "./Matricula"

// Estudiantes

const estudiante1 = new Estudiante(
    "Aristides",
    123456,
    25,
    10,
    "U20268347",
    "aristideszelayax@gmail.com"
)

const estudiante2 = new Estudiante(
    "Maria Lozano",
    123456,
    25,
    10,
    "U20268347",
    "maria@gmail.com"
)

const estudiante3 = new Estudiante(
    "Irving Martinez", 
    10102,
    19,
    0,
    "U20268347",
    "irving@gmail.com"
)


console.log("\n=================== ESTUDIANTES ===========================")
estudiante1.mostrarInfo()
estudiante2.mostrarInfo()
estudiante3.mostrarInfo()


console.log("\n=================== ESTADO ACADÉMICO ===========================")
console.log(estudiante1.estadoAcademico())
console.log(estudiante2.estadoAcademico())
console.log(estudiante3.estadoAcademico())

console.log("\n=================== ACTUALIZAR PROMEDIO ===========================")
estudiante1.actualizarPromedio(9)
estudiante2.actualizarPromedio(8)
estudiante3.actualizarPromedio(7)

console.log("\n=================== ESTADO ACADÉMICO ACTUALIZADO ===========================")
console.log(estudiante1.estadoAcademico())
console.log(estudiante2.estadoAcademico())
console.log(estudiante3.estadoAcademico())


// Cursos
let curso1 = new Curso(
    "Programación Orientada a Objetos",
    "POO",
    4,
    40,
    "Aula 1"
)

let curso2 = new Curso(
    "Bases de Datos",
    "BD",
    4,
    40,
    "Aula 2"
)

let curso3 = new Curso(
    "Desarrollo Web",
    "DW",
    4,
    40,
    "Aula 3"
)

console.log("\n=================== CURSOS ===========================")
curso1.mostrarInfo()
curso2.mostrarInfo()
curso3.mostrarInfo()

console.log("\n==================== ESTADO DE LOS CURSOS ===========================")
console.log(curso1.estaLleno(30))
console.log(curso2.estaLleno(40))
console.log(curso3.estaLleno(45))


console.log("\n=================== PROFESORES ===========================")
const profesor1 = new Profesor(
    "Adolfo Herrera", 
    "Bases de Datos",
    30,
    "adolfo.herrera@univo.edu.sv"
)

const profesor2 = new Profesor(
    "Ing Angel Martinez",
    "Backend",
    0,
    "angel.martinez@univo.edu.sv"
)

const profesor3 = new Profesor(
    "Ing Carlos Riva",
    "Moviles",
    5,
    "carlos.rivas@univo.edu.sv"
)

profesor1.mostrarInfo()
profesor2.mostrarInfo()
profesor3.mostrarInfo()


console.log("\n=================== EXPERIENCIA ===========================")
console.log(profesor1.esExperimentado())
console.log(profesor2.esExperimentado())
console.log(profesor3.esExperimentado())
