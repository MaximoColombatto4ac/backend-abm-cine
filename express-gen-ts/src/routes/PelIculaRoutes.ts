import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import PeliculaService from '@src/services/PeliculaService';
import { IPelicula } from '@src/models/Pelicula';
import { IReq, IRes } from './types/express/misc';


// **** Functions **** //

/**
 * Get all películas.
 */
async function getAll(_: IReq, res: IRes) {
  const peliculas = await PeliculaService.getAll();
  return res.status(HttpStatusCodes.OK).json({ peliculas });
}

/**
 * Add one película.
 */
async function add(req: IReq<{ pelicula: IPelicula }>, res: IRes) {
  const { pelicula } = req.body;
  await PeliculaService.addOne(pelicula);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one película.
 */
async function update(req: IReq<{ pelicula: IPelicula }>, res: IRes) {
  const { pelicula } = req.body;
  await PeliculaService.updateOne(pelicula);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one película.
 */
async function delete_(req: IReq, res: IRes) {
  const id = +req.params.id;
  await PeliculaService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}


// **** Export default **** //

export default {
  getAll,
  add,
  update,
  delete: delete_,
} as const;
