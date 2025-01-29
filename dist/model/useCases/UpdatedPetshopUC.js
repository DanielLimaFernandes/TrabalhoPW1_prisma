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
const respository_1 = require("../../database/respository");
class UpdatedPetshopUC {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name, cnpj }) {
            //validação dos campus capf e name
            const petshop = yield respository_1.prisma.petshop.findUnique({
                where: { cnpj }
            });
            if (!petshop) {
                return { status: 400, message: 'Petshop náo existente!' };
                stop;
            }
            const id = petshop.id;
            ///validação verificando se o amount >0 já está cadastrrado
            const petshopUpdated = yield respository_1.prisma.petshop.update({
                where: {
                    id
                },
                data: {
                    name,
                    cnpj
                }
            });
            return { petshopUpdated };
        });
    }
}
exports.default = new UpdatedPetshopUC();
