"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lista_con_1 = require("../controllers/lista.con");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
router.get('/objeto/:query', validate_token_1.default, lista_con_1.obtQuery);
router.get('/objeto/:esquema/:objeto', validate_token_1.default, lista_con_1.obtTodos);
router.get('/objeto/:esquema/:objeto/:condicion', validate_token_1.default, lista_con_1.obtCondicion);
router.get('/objeto/:esquema/:objeto/:columna/:valor', validate_token_1.default, lista_con_1.obtColumna);
router.get('/funcion/:esquema/:funcion', validate_token_1.default, lista_con_1.obtListaFuncion);
router.get('/estado/:esquema/:objeto/:apiestado/:usumod/:condicion', validate_token_1.default, lista_con_1.modEstado);
exports.default = router;
