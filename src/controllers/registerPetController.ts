import { Request, Response } from "express";
import RegisterPet from "../model/useCases/registerPet";


class RegisterPetController {
  async handle(req: Request, res: Response) {
    const { name, type, description, deadline_vaccination } = req.body;
    console.log(name, type, description, deadline_vaccination)
    console.log(typeof deadline_vaccination)
    const { cnpj } = req.headers;
    
    const petshopCNPJ = cnpj as string;
  
    console.log(cnpj);
    const result = await RegisterPet.execute({ name, type, description, deadline_vaccination, petshopCNPJ});
    

    if (result.status !== 400) {
       res.status(200).json({ result });
    } else {
       res.status(result.status).json({ error: result.message });
    }
  }
}

export default new RegisterPetController();
