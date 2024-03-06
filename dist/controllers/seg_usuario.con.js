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
exports.updateSegUsuario = exports.postSegUsuario = exports.deleteSegUsuario = exports.findSegUsuario = exports.getSegUsuario = void 0;
const seg_usuario_mod_1 = require("../models/seg_usuario.mod");
const getSegUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const lista = yield seg_usuario_mod_1.SegUsuario.findAll();
    res.json(lista);
});
exports.getSegUsuario = getSegUsuario;
const findSegUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_usuario } = req.params;
    const usuario = yield seg_usuario_mod_1.SegUsuario.findByPk(id_usuario);
    if (usuario)
        res.json(usuario);
    else
        res.status(404).json({ msg: `No existe el usuario con el id ${id_usuario}` });
});
exports.findSegUsuario = findSegUsuario;
const deleteSegUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_usuario } = req.params;
    try {
        const usuario = yield seg_usuario_mod_1.SegUsuario.findByPk(id_usuario);
        if (!usuario)
            res.status(404).json({ msg: `No existe el usuario con el id ${id_usuario}` });
        else {
            yield usuario.destroy();
            res.json({ msg: `El usuario ${id_usuario} fue eliminado` });
        }
    }
    catch (error) {
        res.json({ msg: `Ocurrio un error al eliminar el usuario` });
    }
});
exports.deleteSegUsuario = deleteSegUsuario;
const postSegUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const registro = yield seg_usuario_mod_1.SegUsuario.findOne({ where: { login: body.login }, attributes: ['login'] });
        if (registro)
            return res.status(400).json({ msg: `Ya existe el registro ${body.login}` });
        const crypto = require('crypto');
        body.password = crypto.createHash('md5').update(body.login).digest('hex');
        const year = new Date().getFullYear();
        body.fecha_vigente = new Date(year, 11, 31);
        yield seg_usuario_mod_1.SegUsuario.create(body);
        res.json({ msg: `El registro ${body.login} fue creado exitosamente` });
    }
    catch (error) {
        res.json({ msg: `Ocurrio un error al crear el registro` });
    }
});
exports.postSegUsuario = postSegUsuario;
const updateSegUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const registro = yield seg_usuario_mod_1.SegUsuario.findByPk(id);
        if (registro) {
            yield registro.update(body);
            res.json({ msg: `El registro ${body.login} fue actualizado` });
        }
        else
            res.status(404).json({ msg: `No existe el registro con identificador ${id}` });
    }
    catch (error) {
        res.json({ msg: `Ocurrio un error al modificar el registro` });
    }
});
exports.updateSegUsuario = updateSegUsuario;
