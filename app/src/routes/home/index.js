"use strict";    // javascript 사용시 적용

const express = require("express");
const router = express.Router();

// Contorller 연결
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login); 
router.get("/register", ctrl.output.register); 
router.post("/login", ctrl.process.login); 

// 다른데서 사용할 수 있도록 내보낸다.
module.exports = router;   