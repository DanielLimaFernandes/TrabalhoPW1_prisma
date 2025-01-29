import { Request, Response } from "express";
import DeletePetshopUC from "../model/useCases/deletePetshop";

class DeletePetshopController {
  async handle(req: Request, res: Response) {
    const {id} = req.params;
    console.log("10 id: id")
    if(typeof id !== 'string'){
      return;
    }
    const result = await DeletePetshopUC.execute({id});


     res.status(200).json(result);
     return;
  }
}

export default new DeletePetshopController();
