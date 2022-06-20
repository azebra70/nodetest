"use strict";    // javascript 사용시 적용

const output = {
    home: (req,res) => {
        res.render("home/index");
    },
    
    login: (req,res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req,res) => {
        console.log(req.body);
    },
};



// Object에서 key:value를 key만 정의할 경우 key:key와 동일하게 처리
module.exports = {
    output,
    process,
};