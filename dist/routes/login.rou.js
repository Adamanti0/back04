"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_con_1 = require("../controllers/login.con");
const router = (0, express_1.Router)();
router.post('/', login_con_1.login);
exports.default = router;
