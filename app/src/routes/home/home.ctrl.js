"use strict";    // javascript 사용시 적용

const User = require("../../models/User");

const output = {
    home: (req,res) => {
        res.render("home/index");
    },
    
    login: (req,res) => {
        res.render("home/login");
    },
    
    register: (req,res) => {
        res.render("home/register");
    },
};


const process = {
    login: async (req,res) => {
        const user = new User(req.body);
        const response = await user.login();
        // console.log(response);
        return res.json(response);


        // const   id = req.body.id, 
        //     psword = req.body.psword;

        // // Model에서 결과값은 받아옴    
        // const users = UserStorage.getUsers("id","psword");  

        // // console.log("test");
        // const response = {};
        // if ( users.id.includes(id))  {
        //     const idx = users.id.indexOf(id);
        //     if ( users.psword[idx] === psword) {
        //         response.success = true;
        //         return res.json(response);
        //     }     
        // }
        // response.success = false; 
        // response.msg = "로그인에 실패하셨습니다.";  
        // return res.json(response);
    },

    register: async (req,res) => {
        const user = new User(req.body);
        const response = await user.register();
        // console.log(response);
        return res.json(response);
    },    
};


// Object에서 key:value를 key만 정의할 경우 key:key와 동일하게 처리
module.exports = {
    output,
    process,
};