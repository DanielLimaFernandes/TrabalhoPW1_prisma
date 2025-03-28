import { prisma } from "../../database/respository";


type Params = {
    id: string;
    petshopCNPJ: string;
}

class VacinatedPetUC {


  async execute({ id, petshopCNPJ  }: Params) {

    console.log("entrou")
    const cnpj = petshopCNPJ;
    console.log("cnpj: ",cnpj);
    const pet = await prisma.pet.findUnique({
        where: { id }
    });
    console.log(pet);
    if(!pet){
      return {status: 400, message: 'Pet n encontrado'}
    }

    //validação dos campus capf e name
    // faça um codigo aqui paraverificar se o tipo é debit e se for verificar 
    //se tem saldo suficiente para realizar essa transação

    ///validação verificando se o amount >0 já está cadastrrado
    const petVacinad = await prisma.pet.update({
      where: {
        id
      },
      data: {
        vaccinated: true,
        petshop: {
          connect: {
            cnpj
          }
        }
    }
  })
  const petch = await prisma.pet.findUnique({
    where: { id }
});
console.log(petch);
    return { petVacinad }
  }

}

export default new VacinatedPetUC();