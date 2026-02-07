class Libro {
    public name: string
    private bankId: string

    constructor(name: string, bankId: string) {
        // En Python: self.name = name
        this.name = name;

        // Error corregido: antes decías "this.id", pero la propiedad se llama "bankId"
        this.bankId = bankId;
    }

    // Método público para ver el id (ya que es privado)
    public showId(): void {
        console.log(`El ID privado es: ${this.bankId}`);
    }
}

// === EJEMPLO DE USO ===

// 1. Instanciamos (Creamos el objeto)
const miLibro = new Libro("El Quijote", "12345-XYZ");

// 2. Acceder a propiedad PÚBLICA (Se puede)
console.log(miLibro.name); // Salida: "El Quijote"

// 3. Acceder a propiedad PRIVADA (DARÁ ERROR si descomentas la línea)
// console.log(miLibro.bankId); // Error: Property 'bankId' is private...

// 4. Usar un método para ver lo privado
miLibro.showId(); // Salida: "El ID privado es: 12345-XYZ"

