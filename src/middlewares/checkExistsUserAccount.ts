/*import { Request, Response, NextFunction } from 'express';
import { Petshop, prisma } from '../database/respository';


export async function checkExistsUserAcconunt (req: Request, res: Response, next: NextFunction) {
    const { cnpj } = req.headers;

     console.log("cnpj: ",cnpj," tipo: ", typeof cnpj)

    if(typeof cnpj == 'string'){
    
        const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/0001-\d{2}$/;

    if(!cnpjRegex.test(cnpj)){
        res.status(400).json({ error: "Invalid CNPJ format" });
        return;
    }
  
    const petshop = await prisma.petshop.findUnique({
      where: { cnpj }
    });

    console.log("petshop: " , petshop);

    if(!petshop){
      res.status(404).json({ error: 'Petshop não existente' });
    }
    req.petshop = petshop ?? undefined; // Aqui garantimos que nunca será `null`

    next();
    }
}*/
