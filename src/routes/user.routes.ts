import { Router } from 'express';
import { UserController } from '../controllers/User.controller';
const router = Router();

const userControllerRoute = new UserController();

router.post('/login', userControllerRoute.login);
router.post('/user', userControllerRoute.createUser);

export default router;