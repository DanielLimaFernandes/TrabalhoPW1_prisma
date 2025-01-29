"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesPetshops = void 0;
const express_1 = require("express");
const registerPetshopController_1 = __importDefault(require("../controllers/registerPetshopController"));
const findAllPetshopsController_1 = __importDefault(require("../controllers/findAllPetshopsController"));
const deletePetshopConntroller_1 = __importDefault(require("../controllers/deletePetshopConntroller"));
const UpdatedPetshopController_1 = __importDefault(require("../controllers/UpdatedPetshopController"));
// midleware
//import AuthenticateController from '../controllers/AuthenticateController';
//import { verifyToken } from '../middlewares/verifyToken';
const routesPetshops = (0, express_1.Router)();
exports.routesPetshops = routesPetshops;
//routesPetshops.post('/login', AuthenticateController.handle);
routesPetshops.post('/petshops', registerPetshopController_1.default.handle);
routesPetshops.get('/petshops', findAllPetshopsController_1.default.handle);
routesPetshops.put('/petshops/:id', UpdatedPetshopController_1.default.handle);
routesPetshops.delete('/petshops/:id', deletePetshopConntroller_1.default.handle);
