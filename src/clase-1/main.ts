interface IBolt {
  voltage: number;
}

class PowerSource {
  // 1. Declaración explícita de atributos
  public readonly brand: string
  private _isActive: boolean
  protected energyLevel: number

  constructor(brand: string, initialEnergy: number) {
    this.brand = brand;
    this._isActive = false;
    this.energyLevel = initialEnergy;
  }

  // 2. Método público (por defecto, si no pones nada, es public)
  public activate(): void {
    this._isActive = true;
    console.log(`${this.brand} is now online.`);
  }

  // 3. Getter para exponer propiedad privada de forma segura
  get status(): boolean {
    return this._isActive;
  }
}

// Atajo de TS: Parameter Properties (Limpio y común en producción)
class Battery extends PowerSource {
  constructor(
    brand: string, 
    energy: number, 
    public capacity: number // Esto declara y asigna el atributo automáticamente
  ) {
    super(brand, energy);
  }

  public recharge(): void {
    // Podemos acceder a energyLevel porque es 'protected', no 'private'
    this.energyLevel = 100; 
  }
}