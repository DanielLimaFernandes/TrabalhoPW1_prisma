import { Request, Response, NextFunction } from 'express';
import { Petshop, prisma } from '../database/respository';

// }: Params): Promise<Pet[]>
/*
import { Request, Response, NextFunction } from 'express';
import { prisma } from '../database/respository';

// Criamos um tipo personalizado para extender Request e permitir req.petshop
interface CustomRequest extends Request {
    petshop?: any; // Se você tiver um tipo Petshop definido, use ele aqui
}

export async function checkExistsUserAcconunt(req: CustomRequest, res: Response, next: NextFunction): Promise<void> {
    const { cnpj } = req.headers;

    console.log("CNPJ recebido: ", cnpj, " Tipo: ", typeof cnpj);

    if (typeof cnpj === 'string') {
        const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/0001-\d{2}$/;

        if (!cnpjRegex.test(cnpj)) {
            return res.status(400).json({ error: "Invalid CNPJ format" });
        }

        const petshop = await prisma.petshop.findUnique({
            where: { cnpj }
        });

        console.log("Petshop encontrado: ", petshop);

        if (!petshop) {
             res.status(404).json({ error: 'Petshop não encontrado' });
        }

        // Adiciona o petshop ao objeto req para os próximos middlewares
        req.petshop = petshop;
        next(); // Continua para o próximo middleware
    } else {
         res.status(400).json({ error: "CNPJ deve ser uma string válida" });
    }
}*/


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

    console.log("Até aqui td bem")
    res.locals.petshop = petshop ;
    //req.petshop = petshop ?? undefined; // Aqui garantimos que nunca será `null`
    
    next();
    }
}
