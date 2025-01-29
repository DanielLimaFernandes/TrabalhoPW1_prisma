import { Request, Response } from 'express';
import { prisma } from '../database/respository';
import FindAllPetsByPetshopCaseUser from '../model/useCases/FindAllPetsByPetshopCaseUser';

class FindAllPetsByPetshopController {


  async handle(req: Request, res: Response) {
    const { cnpj } = req.headers;

     console.log("cnpj: ",cnpj," tipo: ", typeof cnpj)
    if(typeof cnpj == 'string'){
    
  
    const petshop = await prisma.petshop.findUnique({
      where: { cnpj }
    });

    console.log("petshop: " , petshop);

    if(!petshop){
      res.status(400).json({ error: 'Petshop não existente' });
      return;
     stop;
    }
   
    console.log(cnpj);
    const Pet = await FindAllPetsByPetshopCaseUser.execute({ cnpj });

     res.status(200).json({Pet});
  }

  }
}

export default new FindAllPetsByPetshopController();