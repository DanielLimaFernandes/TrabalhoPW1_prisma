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
class UpdatePetUC {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, name, type, description, deadline_vaccination }) {
            //validação dos campus capf e name
            const pet = yield respository_1.prisma.petshop.findUnique({
                where: { id }
            });
            if (!pet) {
                return { status: 400, message: 'Pet náo existente!' };
            }
            ///validação verificando se o amount >0 já está cadastrrado
            const petUpdated = yield respository_1.prisma.pet.update({
                where: {
                    id
                },
                data: {
                    name, type, description, deadline_vaccination
                }
            });
            return { petUpdated };
        });
    }
}
exports.default = new UpdatePetUC();
