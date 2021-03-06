"use strict";    // javascript 사용시 적용

// const http = require('http');
// const app = http.createServer((req,res) => {
//     res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
//     if (req.url === '/') {
//         res.end('여기는 루트 입니다.');
//     } else {
//         res.end('여기는 로그인 입니다.');
//     }
// });

// app.listen(3001, () => {
//     console.log('http로 서버가동');
// });


// 모듈
const express = require('express');
const bodyParser = require("body-parser");
const app = express();


// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views","./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use("/", home);   // use --> 미들웨어를 등록해주는 메소드

module.exports = app;

