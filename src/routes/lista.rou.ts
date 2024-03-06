import { Router } from 'express';
import { obtQuery, obtTodos, obtCondicion, obtColumna, obtListaFuncion, modEstado } from '../controllers/lista.con';
import validateToken from './validate-token';

const router = Router();

router.get('/objeto/:query',                                         validateToken, obtQuery);
router.get('/objeto/:esquema/:objeto',                               validateToken, obtTodos);
router.get('/objeto/:esquema/:objeto/:condicion',                    validateToken, obtCondicion);
router.get('/objeto/:esquema/:objeto/:columna/:valor',               validateToken, obtColumna);
router.get('/funcion/:esquema/:funcion',                             validateToken, obtListaFuncion);
router.get('/estado/:esquema/:objeto/:apiestado/:usumod/:condicion', validateToken, modEstado);

export default router;