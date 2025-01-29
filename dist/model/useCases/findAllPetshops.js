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
class FindAllPetshops {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const Petshops = yield respository_1.prisma.petshop.findMany({
                select: {
                    cnpj: true,
                    name: true,
                    id: true,
                    pets: {
                        select: {
                            name: true,
                            type: true,
                        }
                    },
                }
            });
            return { Petshops };
        });
    }
}
exports.default = new FindAllPetshops();
