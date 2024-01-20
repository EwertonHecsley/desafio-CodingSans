import { Router } from 'express';

import { UserController } from '../controllers/User.controller';
import { verifyLogin } from '../middlewares/login.middleware';

const router = Router();

const userControllerRoute = new UserController();

router.post('/login', userControllerRoute.login);
router.post('/user', userControllerRoute.createUser);

router.use(verifyLogin);

router.get('/cervejaria', userControllerRoute.getBreweries);


export default router;