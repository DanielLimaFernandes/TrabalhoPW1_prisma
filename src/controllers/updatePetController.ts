import { Request, Response } from "express";
import UpdatePetUC from "../model/useCases/updatePetUC";
import { prisma } from '../database/respository';

class UpdatePetController {
  async handle(req: Request, res: Response) {
    const { name, type, description, deadline_vaccination } = req.body;
    console.log(name, type, description, deadline_vaccination)
    console.log(typeof deadline_vaccination)
    const { id } = req.params;

    const petshop = res.locals.petshop
    const petshopCNPJ = petshop.cnpj;

    console.log("petshop: ", petshop);
    console.log("cnpj: ", petshopCNPJ);
    const result = await UpdatePetUC.execute({ id, name, type, description, deadline_vaccination, petshopCNPJ });



    res.status(200).json(result);
    return;

  }
}


export default new UpdatePetController();
