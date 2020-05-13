export class Actor {
    constructor(
        public nombre: string,
        public pelicula: string,
        public edad: number,
        public protagonista: boolean,
        public lugarNac: string,
        public fechaNac?: Date
    ) {}
}