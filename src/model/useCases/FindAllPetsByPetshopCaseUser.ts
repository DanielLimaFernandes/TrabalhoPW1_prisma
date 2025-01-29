import { prisma, Pet } from '../../database/respository';
import { error } from 'console';
import { Request, Response } from 'express';

type Params = {
  cnpj: string;
}

class FindAllPetsByPetshopCaseUser {

  async execute({ cnpj }: Params): Promise<Pet[]> {

    console.log(cnpj);
    //validação dos campus capf e name

    ///validação verificando se o amount >0 já está cadastrrado
   
    const Pet = await prisma.pet.findMany({
      where: {
        petshopCNPJ: cnpj,
      },
    });

    return Pet;
  }
}

export default new FindAllPetsByPetshopCaseUser();