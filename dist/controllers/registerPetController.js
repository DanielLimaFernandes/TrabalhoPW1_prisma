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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registerPet_1 = __importDefault(require("../model/useCases/registerPet"));
class RegisterPetController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, type, description, deadline_vaccination } = req.body;
            console.log(name, type, description, deadline_vaccination);
            console.log(typeof deadline_vaccination);
            const { cnpj } = req.headers;
            const petshopCNPJ = cnpj;
            console.log(cnpj);
            const result = yield registerPet_1.default.execute({ name, type, description, deadline_vaccination, petshopCNPJ });
            if (result.status !== 400) {
                res.status(200).json({ result });
            }
            else {
                res.status(result.status).json({ error: result.message });
            }
        });
    }
}
exports.default = new RegisterPetController();
