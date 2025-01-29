"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const petshops_routes_1 = require("./petshops.routes");
const pets_routes_1 = require("./pets.routes");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.use(petshops_routes_1.routesPetshops);
routes.use(pets_routes_1.routesPet);
