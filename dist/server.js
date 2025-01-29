"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const api = (0, express_1.default)();
console.log("oi");
api.use(express_1.default.json());
api.use((0, cors_1.default)());
api.use(routes_1.routes);
api.listen('3333', () => {
    console.log('server on port 3333');
});
