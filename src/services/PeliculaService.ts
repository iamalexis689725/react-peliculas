import { Pelicula } from "../models/Pelicula";
import apiClient from "./interceptor";

export class PeliculaService {
    getPeliculaList() {
        return new Promise<Pelicula[]>((resolve, reject) => {
            apiClient.get('/peliculas')
                .then((response) => {
                    resolve(response.data);
                }).catch((error) => {
                    console.log(error);
                    reject(error);
                })
        });
    }
}