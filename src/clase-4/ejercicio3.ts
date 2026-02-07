class Rectangulo {
    base: number
    altura: number

    constructor(base: number, altura: number) {
        this.base = base
        this.altura = altura
    }

    calcularArea() {
        console.log(`El area del rectangulo es: ${this.base * this.altura}`)
    }

    calcularPerimetro() {
        console.log(`El perimetro del rectangulo es: ${2 * (this.base + this.altura)}`)
    }
}

const MiRectangulo = new Rectangulo(10, 20)

MiRectangulo.calcularArea()
MiRectangulo.calcularPerimetro()