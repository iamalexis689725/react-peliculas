import { createBrowserRouter } from "react-router-dom";
import { ListPersonas } from "../pages/personas/ListPersonas";
import { ListPeliculas } from "../pages/peliculas/ListPeliculas";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ListPersonas />,
  },
  {
    path: '/peliculas',
    element: <ListPeliculas/>
  }
]);