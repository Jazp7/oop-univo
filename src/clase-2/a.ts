let name: string = "Arístides"

function saludar(): void {
    return console.log("Dentro de la función " + name)
}

saludar()
console.log("Fuera de la función " + name)

function calcular(): void {
    let numero: number = 55
    console.log(numero)
}

calcular()

let variableGlobal: string = "Variable Global Main"

function ejemplo(): void {
    let variableEjemplo: string = "Esta variable esta dentro de esta función de ejemplo"
    console.log(variableGlobal)
    console.log(variableEjemplo)
}

ejemplo()

let nombre: string = "Edgar"
let edad: number = 26

console.log("Hola, mi nombre es " + nombre + " y tengo la edad de " + edad + " años")
console.log(`Hola, mi nombre es ${nombre} y tengo la edad de ${edad} años`)