import { Request, Response } from 'express';
import { prisma } from '../database/respository';
import FindAllPetsByPetshopCaseUser from '../model/useCases/FindAllPetsByPetshopCaseUser';

class FindAllPetsByPetshopController {


  async handle(req: Request, res: Response) {
    const petshop = res.locals.petshop
    const cnpj = petshop.cnpj;

    console.log("petshop: ", petshop);
    console.log("cnpj: ", cnpj);
   
    const Pet = await FindAllPetsByPetshopCaseUser.execute({ cnpj });

     res.status(200).json({Pet});
  }

  }


export default new FindAllPetsByPetshopController();