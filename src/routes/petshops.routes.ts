import { Router } from 'express';

import RegisterPetshopController from '../controllers/registerPetshopController';
import FindAllPetshopsController from '../controllers/findAllPetshopsController';
import DeletePetshopController from '../controllers/deletePetshopConntroller';
import UpdatedPetshopController from '../controllers/UpdatedPetshopController';

// midleware
//import AuthenticateController from '../controllers/AuthenticateController';
//import { verifyToken } from '../middlewares/verifyToken';

const routesPetshops = Router();

//routesPetshops.post('/login', AuthenticateController.handle);
routesPetshops.post('/petshops', RegisterPetshopController.handle);
routesPetshops.get('/petshops', FindAllPetshopsController.handle);
routesPetshops.put('/petshops/:id', UpdatedPetshopController.handle);

routesPetshops.delete('/petshops/:id', DeletePetshopController.handle);

export { routesPetshops }