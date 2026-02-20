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
console.log(curso1.estaLleno())
console.log(curso2.estaLleno())
console.log(curso3.estaLleno())


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


console.log("\n=================== MATRICULAS ===========================")
const matricula1 = new Matricula(
    estudiante1,
    curso1,
    profesor1,
    new Date("2026-01-10"),
    "Activa"
)

const matricula2 = new Matricula(
    estudiante2,
    curso2,
    profesor2,
    new Date("2026-01-10"),
    "Activa"
)

const matricula3 = new Matricula(
    estudiante3,
    curso3,
    profesor3,
    new Date("2026-01-10"),
    "No activa"
)

matricula1.mostrarInfo()
matricula2.mostrarInfo()
matricula3.mostrarInfo()

console.log("\n=================== ESTADO DE LAS MATRICULAS ===========================")
console.log(matricula1.estaActiva())
console.log(matricula2.estaActiva())
console.log(matricula3.estaActiva())

matricula1.cambiarEstado("No activa")
matricula2.cambiarEstado("No activa")
matricula3.cambiarEstado("Activa")

console.log("\n=================== ESTADO DE LAS MATRICULAS ACTUALIZADO ===========================")
console.log(matricula1.estaActiva())
console.log(matricula2.estaActiva())
console.log(matricula3.estaActiva())


// Cursos para estudiantes
estudiante1.agregarCurso(curso1)
estudiante2.agregarCurso(curso2)
estudiante3.agregarCurso(curso3)

console.log("\n=================== CURSOS DE LOS ESTUDIANTES ===========================")
estudiante1.mostrarInfo()
estudiante2.mostrarInfo()
estudiante3.mostrarInfo()

// Agregar estudiantes a los cursos
console.log("\n=================== AGREGAR ESTUDIANTES A LOS CURSOS ===========================")
curso1.agregarEstudiante(estudiante1)
curso2.agregarEstudiante(estudiante1)
curso3.agregarEstudiante(estudiante1)

curso2.agregarEstudiante(estudiante2)
curso3.agregarEstudiante(estudiante2)

curso1.agregarEstudiante(estudiante3)
curso3.agregarEstudiante(estudiante3)

curso1.mostrarEstudiantes()
curso2.mostrarEstudiantes()
curso3.mostrarEstudiantes()

// Asignar profesores a los cursos
console.log("\n=================== ASIGNAR PROFESORES A LOS CURSOS ===========================")
profesor1.agregarCurso(curso1)
profesor2.agregarCurso(curso2)
profesor3.agregarCurso(curso3)

profesor1.mostrarCursos()
profesor2.mostrarCursos()
profesor3.mostrarCursos()

console.log("\n=================== RESUMEN DE PROFESORES ===========================")
profesor1.resumen()
profesor2.resumen()
profesor3.resumen()

// Historial de las matrículas
console.log("\n=================== HISTORIAL DE ESTADOS DE LAS MATRICULAS ===========================")
matricula1.mostrarHistorialEstados()
matricula2.mostrarHistorialEstados()
matricula3.mostrarHistorialEstados()