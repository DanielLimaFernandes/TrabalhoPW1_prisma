
/*mport 'express';
import { Petshop, Pet } from '@prisma/client'; // Importe os tipos do Prisma

declare global {
  namespace Express {
    interface Request {
      petshop?: Petshop; // Use o tipo gerado pelo Prisma
    }
  }
}*/


import 'express';
import { Petshop } from '@prisma/client';

declare module 'express' {
  export interface Request {
    petshop?: Petshop; // Adicionando a propriedade na interface do Express
  }
}
