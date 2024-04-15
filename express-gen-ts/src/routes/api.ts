import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../constants/Paths';
import Pelicula from '@src/models/Pelicula';
import PelIculaRoutes from './PelIculaRoutes';


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

// Add peliculaRouter
apiRouter.use(Paths.Peliculas.Base, peliculaRouter);


// **** Export default **** //

export default apiRouter;
