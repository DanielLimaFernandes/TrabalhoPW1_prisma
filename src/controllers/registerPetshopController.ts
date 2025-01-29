import { Request, Response } from "express";
import RegisterPetshop from '../model/useCases/registerPetshop';



class RegisterPetshopController {
  async handle(req: Request, res: Response) {
    const { cnpj, name } = req.body;


    const result = await RegisterPetshop.execute({ name, cnpj });

    if (result.status !== 400) {
       res.status(200).json({ result });
    } else {
       res.status(result.status).json({ error: result.message });
    }
  }
}

export default new RegisterPetshopController();