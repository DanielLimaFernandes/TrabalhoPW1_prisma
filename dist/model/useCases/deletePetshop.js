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
class DeletePetshop {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id }) {
            console.log("id: ", id);
            const petshop = yield respository_1.prisma.petshop.findUnique({
                where: { id }
            });
            console.log(petshop);
            if (!petshop) {
                return { status: 400, message: 'Petshop náo existente!' };
            }
            //validação dos campus capf e name
            ///validação verificando se o amount >0 já está cadastrrado
            yield respository_1.prisma.petshop.delete({
                where: {
                    id: id
                }
            });
            return { message: "Petshop deletado" };
        });
    }
}
exports.default = new DeletePetshop();
