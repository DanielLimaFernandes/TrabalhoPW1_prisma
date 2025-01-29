import { Request, Response } from "express";
import UpdatedPetshopUC from "../model/useCases/UpdatedPetshopUC";

class UpdatedPetshopController {
  async handle(req: Request, res: Response) {
    const {cnpj, name} = req.body;



    const result = await UpdatedPetshopUC.execute({ cnpj, name });


     res.status(200).json(result);
     return;

  }
}

export default new UpdatedPetshopController();
