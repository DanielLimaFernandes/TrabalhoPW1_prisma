import { error } from "console";
import { prisma } from "../../database/respository";

type Params = {
    name: string;
    type: string;
    description: string;
    deadline_vaccination: Date;
    petshopCNPJ: string;
}

class RegisterPet {


  async execute({ name, type, description, deadline_vaccination, petshopCNPJ  }: Params) {


    const cnpj = petshopCNPJ;
    console.log(cnpj);
    //validação dos campus capf e name

    ///validação verificando se o amount >0 já está cadastrrado
    const petshop = await prisma.petshop.findUnique({
      where: { cnpj }
    });

    console.log("petshop: " , petshop);

    if(!petshop){
     return{ status: 400, error, message: 'Petshop náo existente!' };
     stop;
    }

    const { DateTime } = require('luxon');
    const dataFormatada = DateTime.fromFormat(deadline_vaccination, 'dd/MM/yyyy').toISO();
    console.log(dataFormatada);
    // faça um codigo aqui paraverificar se o tipo é debit e se for verificar 
    //se tem saldo suficiente para realizar essa transação


    const Pet = await prisma.pet.create({
      data: {
        name, type, description, deadline_vaccination: dataFormatada,
        petshop: {
          connect: {
            cnpj
          }
        }
      }
    })


    return { Pet };




  }
}

export default new RegisterPet ();