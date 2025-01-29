"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesPet = void 0;
const express_1 = require("express");
const registerPetController_1 = __importDefault(require("../controllers/registerPetController"));
// midleware
const FindAllPetsByPetshopController_1 = __importDefault(require("../controllers/FindAllPetsByPetshopController"));
//import BalanceByUserController from '../controllers/BalanceByUserController';
//import { verifyToken } from '../middlewares/verifyToken';
const checkExistsUserAccount_1 = require("../middlewares/checkExistsUserAccount");
const UpdatedPetshopController_1 = __importDefault(require("../controllers/UpdatedPetshopController"));
const routesPet = (0, express_1.Router)();
exports.routesPet = routesPet;
routesPet.post('/pets', registerPetController_1.default.handle);
routesPet.get('/pets/', FindAllPetsByPetshopController_1.default.handle);
routesPet.put('/pets/:id', checkExistsUserAccount_1.checkExistsUserAcconunt, UpdatedPetshopController_1.default.handle);
