import { prisma } from '../../database/respository';

class FindAllPetshops {


  async execute() {

    const Petshops = await prisma.petshop.findMany({
      select: {
        cnpj: true,
        name: true,
        id:true,
        pets: {
          select: {
            name: true,
            type: true,
          }
        },

      }
    });
    return { Petshops }
  }
}

export default new FindAllPetshops();