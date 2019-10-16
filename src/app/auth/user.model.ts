

export class Usuario {

    public id: string;
    public dpi: string;
    public nombre: string;
    public apellido: string;
    public fechaNacimiento: string;
    public sexo?: string;
    public email: string;
    public userRole: string;
    public apiToken?: string;
    public estado: string;

    constructor(obj: DataOBj) {
        this.id = obj && obj.id || null;
        this.dpi = obj && obj.dpi || null;
        this.nombre = obj && obj.nombre || null;
        this.apellido = obj && obj.apellido || null;
        this.fechaNacimiento = obj && obj.fechaNacimiento || null;
        this.sexo = obj && obj.sexo || null;
        this.email = obj && obj.email || null;
        this.userRole = obj && obj.userRole || null;
        this.apiToken = obj && obj.apiToken || null;
        this.estado = obj && obj.estado || null;
    }

}

// Se crea la interfaz para definir el tipo de objetos

interface DataOBj {
    id: string;
    dpi: string;
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
    sexo?: string;
    email: string;
    userRole: string;
    apiToken?: string;
    estado: string;
}
