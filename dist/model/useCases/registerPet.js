"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const respository_1 = require("../../database/respository");
class RegisterPet {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name, type, description, deadline_vaccination, petshopCNPJ }) {
            const cnpj = petshopCNPJ;
            console.log(cnpj);
            //validação dos campus capf e name
            ///validação verificando se o amount >0 já está cadastrrado
            const petshop = yield respository_1.prisma.petshop.findUnique({
                where: { cnpj }
            });
            console.log("petshop: ", petshop);
            if (!petshop) {
                return { status: 400, error: console_1.error, message: 'Petshop náo existente!' };
                stop;
            }
            const { DateTime } = require('luxon');
            const dataFormatada = DateTime.fromFormat(deadline_vaccination, 'dd/MM/yyyy').toISO();
            console.log(dataFormatada);
            // faça um codigo aqui paraverificar se o tipo é debit e se for verificar 
            //se tem saldo suficiente para realizar essa transação
            const Pet = yield respository_1.prisma.pet.create({
                data: {
                    name, type, description, deadline_vaccination: dataFormatada,
                    petshop: {
                        connect: {
                            cnpj
                        }
                    }
                }
            });
            return { Pet };
        });
    }
}
exports.default = new RegisterPet();
