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
exports.checkExistsUserAcconunt = checkExistsUserAcconunt;
const respository_1 = require("../database/respository");
function checkExistsUserAcconunt(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { cnpj } = req.headers;
        console.log("cnpj: ", cnpj, " tipo: ", typeof cnpj);
        if (typeof cnpj == 'string') {
            const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/0001-\d{2}$/;
            if (!cnpjRegex.test(cnpj)) {
                res.status(400).json({ error: "Invalid CNPJ format" });
                return;
            }
            const petshop = yield respository_1.prisma.petshop.findUnique({
                where: { cnpj }
            });
            console.log("petshop: ", petshop);
            if (!petshop) {
                res.status(404).json({ error: 'Petshop não existente' });
            }
            req.petshop = petshop !== null && petshop !== void 0 ? petshop : undefined; // Aqui garantimos que nunca será `null`
            next();
        }
    });
}
