import { Router } from 'express';

import DeletePetController from '../controllers/deletePetController';
import VacinatedPetController from '../controllers/VacinatedPetController';
import RegisterPetController from '../controllers/registerPetController';
import UpdatePetController from '../controllers/updatePetController';
// midleware
import FindAllPetsByPetshopController from '../controllers/FindAllPetsByPetshopController';
//import BalanceByUserController from '../controllers/BalanceByUserController';

//import { checkExistsUserAcconunt } from '../middlewares/checkExistsUserAccount';
import UpdatedPetshopUC from '../model/useCases/UpdatedPetshopUC';
import UpdatedPetshopController from '../controllers/UpdatedPetshopController';

const routesPet = Router();

routesPet.post('/pets', RegisterPetController.handle);
routesPet.get('/pets/', FindAllPetsByPetshopController.handle);
routesPet.put('/pets/:id', UpdatePetController.handle)
routesPet.patch('/pets/:id/vaccinated', VacinatedPetController.handle)
routesPet.delete('/pets/:id', DeletePetController.handle)

//routesPet.get('/balance/:id', BalanceByUserController.handle);

export { routesPet }