import { Param } from '@prisma/client/runtime/library';
import { prisma } from '../../database/respository';

type Params = {
  id:string;
}
class DeletePetshop {


  async execute({ id }: Params)  {

console.log("id: ", id);
    
    const petshop = await prisma.petshop.findUnique({
      where: { id }
    });
    console.log(petshop);
    
    if(!petshop){
      return { status: 400, message: 'Petshop náo existente!' };
    }
    //validação dos campus capf e name

    ///validação verificando se o amount >0 já está cadastrrado
    await prisma.petshop.delete({
      where: {
        id: id
      }
    })


    return { message: "Petshop deletado" }
  }

}

export default new DeletePetshop();