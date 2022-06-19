"use strict";    // javascript 사용시 적용

const express = require("express");
const router = express.Router();

// Contorller 연결
const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);
router.get("/login", ctrl.login); 

module.exports = router;   // 다른데서 사용할 수 있도록 내보낸다.