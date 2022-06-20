"use strict";    // javascript 사용시 적용

const output = {
    home: (req,res) => {
        res.render("home/index");
    },
    
    login: (req,res) => {
        res.render("home/login");
    },
};

const users = {
    id : ["K1234","O123","j3456"],
    psword : ["1234","123","3456"],
};
       

const process = {
    login: (req,res) => {
        if ( users.id.includes(req.body.id))  {
            const idx = users.id.indexOf(req.body.id);
            if ( users.psword[idx] === req.body.psword) {
                return res.json({
                    success: true,
                });
            }     
        }   
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    },
};



// Object에서 key:value를 key만 정의할 경우 key:key와 동일하게 처리
module.exports = {
    output,
    process,
};