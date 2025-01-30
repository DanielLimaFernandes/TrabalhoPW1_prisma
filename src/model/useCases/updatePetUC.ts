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

    console.log("entrou")
    const cnpj = petshopCNPJ;
    console.log("cnpj: ",cnpj);
    const { DateTime } = require('luxon');
    const dataFormatada = DateTime.fromFormat(deadline_vaccination, 'dd/MM/yyyy').toISO();
    console.log(dataFormatada);

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