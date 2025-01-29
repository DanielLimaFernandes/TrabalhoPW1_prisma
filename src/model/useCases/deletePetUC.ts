import { prisma } from "../../database/respository";


type Params = {
    id: string;
    petshopCNPJ: string;
}

class DeletePetUC {


  async execute({ id, petshopCNPJ  }: Params) {

    const pet = await prisma.pet.findFirst({
        where: {
            id,
            petshopCNPJ, // Garante que o pet pertence ao petshop correto
        }
    });
    if(!pet){
        return{error: "Pet n existente"}
    }
    const petc = await prisma.pet.findUnique({
        where: { id }
    });
    console.log(petc);

    //validação dos campus capf e name
    // faça um codigo aqui paraverificar se o tipo é debit e se for verificar 
    //se tem saldo suficiente para realizar essa transação

    ///validação verificando se o amount >0 já está cadastrrado
   await prisma.pet.delete({
        where: {
          id: id
        },
    }
  )

  console.log(pet);

  return { message: "Pet deletado" };
  }

}

export default new DeletePetUC();