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

    console.log("entrou")
    const cnpj = petshopCNPJ;
    console.log("cnpj: ",cnpj);
   

    const { DateTime } = require('luxon');
    const dataFormatada = DateTime.fromFormat(deadline_vaccination, 'dd/MM/yyyy').toISO();
    console.log("data formatada: ",dataFormatada);
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

  if(!Pet){
    return {status: 500, message: 'erro ao criar objeto'}
  }


    return { Pet };




  }
}

export default new RegisterPet ();