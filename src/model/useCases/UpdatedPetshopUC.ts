import { prisma } from "../../database/respository";


type Params = {
  name:string;
  cnpj:string;
}

class UpdatedPetshopUC {


  async execute({ name, cnpj }: Params) {
    //validação dos campus capf e name

    const petshop = await prisma.petshop.findUnique({
      where: { cnpj }
    });
    if(!petshop){
      return { status: 400, message: 'Petshop náo existente!' };
      stop;
    }
    const id = petshop.id;

    ///validação verificando se o amount >0 já está cadastrrado
    const petshopUpdated = await prisma.petshop.update({
      where: {
        id
      },
      data:{
        name,
        cnpj
      }
    })


    return { petshopUpdated }
  }

}

export default new UpdatedPetshopUC();