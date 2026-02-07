class Libro {
    public titulo: string
    public autor: string
    public editorial: string

    public añoPublicacion: number
    public paginas: number

    public esBestseller: boolean

    constructor(titulo: string, autor: string, editorial: string, añoPublicacion: number, paginas: number, esBestseller: boolean) {
        this.titulo = titulo
        this.autor = autor
        this.editorial = editorial
        this.añoPublicacion = añoPublicacion
        this.paginas = paginas
        this.esBestseller = esBestseller
    }

    public showData(): void {
        console.log(`Titulo: ${this.titulo}`)
        console.log(`Autor: ${this.autor}`)
        console.log(`Editorial: ${this.editorial}`)
        console.log(`Año de publicacion: ${this.añoPublicacion}`)
        console.log(`Paginas: ${this.paginas}`)
        console.log(`Es bestseller: ${this.esBestseller}`)
    }

}

const libro1 = new Libro("El principito", "Antoine de Saint-Exupéry", "Editorial Planeta", 1943, 128, true)
libro1.showData()
