import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../constants/Paths';
import Pelicula from '@src/models/Pelicula';
import Funcion from '@src/models/Funcion';
import PelIculaRoutes from './PelIculaRoutes';
import FuncionRoutes from './FuncionRoutes';


// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();


// ** Add peliculaRouter ** //

const peliculaRouter = Router();

// Get all Peliculas
peliculaRouter.get(
  Paths.Peliculas.Get,
  PelIculaRoutes.getAll,
);

// Add one user
peliculaRouter.post(
  Paths.Peliculas.Add,
  validate(['pelicula', Pelicula.isPelicula]),
  PelIculaRoutes.add,
);

// Update one user
peliculaRouter.put(
  Paths.Peliculas.Update,
  validate(['pelicula', Pelicula.isPelicula]),
  PelIculaRoutes.update,
);

// Delete one user
peliculaRouter.delete(
  Paths.Peliculas.Delete,
  validate(['id']),
  PelIculaRoutes.delete,
);

// ** Add funcionRouter ** //

const funcionRouter = Router();

// Get all Funciones
funcionRouter.get(
  Paths.Peliculas.Funciones.Get,
  FuncionRoutes.getAll,
);

// Add one Funcion
funcionRouter.post(
  Paths.Peliculas.Funciones.Add,
  validate(['funcion', Funcion.isFuncion]),
  FuncionRoutes.add,
);

// Update one Funcion
funcionRouter.put(
  Paths.Peliculas.Funciones.Update,
  validate(['funcion', Funcion.isFuncion]),
  FuncionRoutes.update,
);

// Delete one Funcion
funcionRouter.delete(
  Paths.Peliculas.Funciones.Delete,
  validate(['id']),
  PelIculaRoutes.delete,
);


// Add peliculaRouter
apiRouter.use(Paths.Peliculas.Base, peliculaRouter);


// Add funcionRouter
peliculaRouter.use(Paths.Peliculas.Funciones.Base, funcionRouter);


// **** Export default **** //

export default apiRouter;
