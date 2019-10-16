

export class Usuario {

    public name: string;
    public uid: string;
    public role: string;
    public estado: boolean;
    public avatarImg: string;
    public email: string;

    constructor(obj: DataOBj) {
        this.name = obj && obj.name || null;
        this.email = obj && obj.email || null;
        this.uid = obj && obj.uid || null;
        this.role = obj && obj.role || null;
        this.estado = obj && obj.estado || false;
        this.avatarImg = obj && obj.avatarImg || null;
    }

}

// Se crea la interfaz para definir el tipo de objetos

interface DataOBj {
    name: string;
    uid: string;
    role: string;
    estado: boolean;
    avatarImg: string;
    email: string;
}
