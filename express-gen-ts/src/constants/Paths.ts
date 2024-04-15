/**
 * Express router paths go here.
 */


export default {
  Base: '/api',
  Peliculas: {
    Base: '/peliculas',
    Get: '/',
    GetOne: '/:id',
    Add: '/',
    Update: '/:id',
    Delete: '/:id',
    Funciones: {
      Base: '/funciones',
      Get: '/',
      GetOne: '/:id',
      Add: '/',
      Update: '/:id',
      Delete: '/:id',
    }
  },
} as const;
