"use strict";    // javascript 사용시 적용

const home = (req,res) => {
    res.render("home/index");
};

const login = (req,res) => {
    res.render("home/login");
};

// Object에서 key:value를 key만 정의할 경우 key:key와 동일하게 처리
module.exports = {
    home,
    login,
};