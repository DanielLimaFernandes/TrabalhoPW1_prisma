import { Request, Response } from "express";
import UpdatePetUC from "../model/useCases/updatePetUC";
import { prisma } from '../database/respository';

class UpdatePetController {
  async handle(req: Request, res: Response) {
    const { name, type, description, deadline_vaccination } = req.body;
        console.log(name, type, description, deadline_vaccination)
        console.log(typeof deadline_vaccination)
        const {id} = req.params;

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
    const petshopCNPJ = cnpj;
        const result = await UpdatePetUC.execute({ id, name, type, description, deadline_vaccination, petshopCNPJ});
        


     res.status(200).json(result);
     return;

  }
}
}

export default new UpdatePetController();
