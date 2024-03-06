import { Router } from 'express';
import { login } from '../controllers/login.con';
import validateToken from './validate-token';

const router = Router();

router.post('/', login);

export default router;