import { Request, Response } from "express";
import VacinatedPetUC from "../model/useCases/VacinatedPetUC";
import { prisma } from '../database/respository';

class VacinatedPetController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        console.log(id)

        const petshop = res.locals.petshop
        const petshopCNPJ = petshop.cnpj;

        console.log("petshop: ", petshop);
        console.log("cnpj: ", petshopCNPJ);

        const result = await VacinatedPetUC.execute({ id, petshopCNPJ });

        if (result.status !== 400) {
            res.status(200).json({ result });
         } else {
            res.status(result.status).json({ error: result.message });
         }

    }
}


export default new VacinatedPetController();
