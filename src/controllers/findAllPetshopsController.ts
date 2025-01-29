import { Request, Response } from "express";
import findAllPetshopsUC from "../model/useCases/findAllPetshops";

class FindAllPetshopsController {
  async handle(req: Request, res: Response) {
      
    const result = await findAllPetshopsUC.execute();

       res.status(200).json({ result });
       return;
    
  }
}

export default new FindAllPetshopsController();
