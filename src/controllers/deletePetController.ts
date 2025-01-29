import { Request, Response } from "express";
import DeletePetUC from "../model/useCases/deletePetUC";
import { prisma } from '../database/respository';

class DeletePetController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        console.log(id)

        const { cnpj } = req.headers;
        console.log("cnpj: ", cnpj, " tipo: ", typeof cnpj)

        if (typeof cnpj == 'string') {


            const petshop = await prisma.petshop.findUnique({
                where: { cnpj }
            });

            console.log("petshop: ", petshop);

            if (!petshop) {
                res.status(400).json({ error: 'Petshop não existente' });
                return;
            }
            const petshopCNPJ = cnpj;
            const result = await DeletePetUC.execute({ id, petshopCNPJ });



            res.status(200).json(result);
            return;

        }
    }
}

export default new DeletePetController();
