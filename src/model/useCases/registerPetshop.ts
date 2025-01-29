
import { v4 as uuidv4 } from 'uuid';
import { prisma } from "../../database/respository";
import {hash} from "bcrypt";


type Params = {
  name: string;
  cnpj: string;
}

class RegisterPetshop {


  async execute({ name, cnpj}: Params) {
 
    //validação dos campus cpf e name

    ///validação verificando se o usario já está cadastrrado
    const existPetshop = await prisma.petshop.findUnique({
      where: {
        cnpj
      }
    });

    if (existPetshop !== null) {
      return { message: "Error: petshop já existe no banco.", status:400}
    }

    const petshop = await prisma.petshop.create({
      data: {
        cnpj,
        name,
        }
      }
    );

    return { petshop }

  }
}

export default new RegisterPetshop();