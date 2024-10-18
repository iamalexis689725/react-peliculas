export interface Pelicula {
    id?: number;
    nombre: string;
    sinopsis: string;
    imagen: string;
    fecha_lanzamiento: Date;
    calificacion: number;
    trailer: string;
}