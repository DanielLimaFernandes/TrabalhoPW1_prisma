import { Request, Response } from "express";
import RegisterPet from "../model/useCases/registerPet";


class RegisterPetController {
  async handle(req: Request, res: Response) {
    const { name, type, description, deadline_vaccination } = req.body;
    console.log(name, type, description, deadline_vaccination)
    console.log(typeof deadline_vaccination)
    const petshop = res.locals.petshop
    const petshopCNPJ = petshop.cnpj;
  
    console.log("petshop: ", petshop);
    console.log("cnpj: ", petshopCNPJ);
    
    const result = await RegisterPet.execute({ name, type, description, deadline_vaccination, petshopCNPJ});
    

    if (result.status !== 500) {
       res.status(200).json({ result });
    } else {
       res.status(result.status).json({ error: result.message });
    }
  }
}

export default new RegisterPetController();
