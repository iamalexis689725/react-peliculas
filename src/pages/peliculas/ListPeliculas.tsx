import { useEffect, useState } from "react";
import { Pelicula } from "../../models/Pelicula";
import { PeliculaService } from "../../services/PeliculaService";
import '../../styles/ListPeliculas.css';

export const ListPeliculas = () => {
    const [peliculas, setPeliculas] = useState<Pelicula[]>([]);

    useEffect(() => {
        const peliculaService = new PeliculaService();
        peliculaService.getPeliculaList()
            .then((peliculas) => {
                setPeliculas(peliculas);
            })
            .catch((error) => {
                console.error("Error al obtener las películas:", error);
            });
    }, []);

    const obtenerUrlIncrustacionYouTube = (url: string) => {
        const idVideo = url.split('v=')[1];
        const posicionAmpersand = idVideo.indexOf('&');
        return posicionAmpersand !== -1 ? idVideo.substring(0, posicionAmpersand) : idVideo;
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Lista de Películas</h2>
            <div className="row">
                {peliculas.map((pelicula) => (
                    <div className="col-md-4 mb-4" key={pelicula.id}>
                        <div className="card">
                            <img 
                                src={pelicula.imagen} 
                                alt={pelicula.nombre} 
                                className="card-img-top img-custom" // Clase personalizada
                            />
                            <div className="card-body">
                                <h3 className="card-title">{pelicula.nombre}</h3>
                                <p>Fecha de lanzamiento: {new Date(pelicula.fecha_lanzamiento).toLocaleDateString()}</p>
                                <p>Calificación: {pelicula.calificacion} %</p>
                                <iframe 
                                    className="embed-responsive-item" 
                                    width="100%" 
                                    height="200" 
                                    src={`https://www.youtube.com/embed/${obtenerUrlIncrustacionYouTube(pelicula.trailer)}`} 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
