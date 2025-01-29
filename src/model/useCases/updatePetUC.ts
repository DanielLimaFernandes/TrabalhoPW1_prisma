import { prisma } from "../../database/respository";


type Params = {
    id: string;
    name: string;
    type: string;
    description: string;
    deadline_vaccination: Date;
    petshopCNPJ: string;
}

class UpdatePetUC {


  async execute({ id, name, type, description, deadline_vaccination, petshopCNPJ  }: Params) {

    //validação dos campus capf e name
    const cnpj = petshopCNPJ;
    const { DateTime } = require('luxon');
    const dataFormatada = DateTime.fromFormat(deadline_vaccination, 'dd/MM/yyyy').toISO();
    console.log(dataFormatada);
    // faça um codigo aqui paraverificar se o tipo é debit e se for verificar 
    //se tem saldo suficiente para realizar essa transação

    ///validação verificando se o amount >0 já está cadastrrado
    const petUpdated = await prisma.pet.update({
      where: {
        id
      },
      data: {
        name, type, description, deadline_vaccination: dataFormatada,
        petshop: {
          connect: {
            cnpj
          }
        }
    }
  })


    return { petUpdated }
  }

}

export default new UpdatePetUC();