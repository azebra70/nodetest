"use strict";

const    id    = document.querySelector("#id"),
        name   = document.querySelector("#name"),
     psword    = document.querySelector("#psword"),
     confirmPsword    = document.querySelector("#confirm-psword"),
   registerBtn = document.querySelector("#button");

// console.log("hello register");

 
registerBtn.addEventListener("click", register);



function register() {
    if (!id.value) return alert("아이디를 입력하세요");
    if (psword !== confirmPsword)  return alert("비밀번호가 일치하지 않습니다.");
    
    const req = {
        id : id.value,
        name : name.value,
        psword : psword.value,
    };

    fetch("/register",{              // /register을 호출한다.     
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(req),   // 입력된 값은 body로 담는다.
    })
    .then((res) => res.json())       // Response(promise객체)를 json으로 받는다.
    .then((res) => {                 // 받은 Response값을 구분 처리한다  
        if (res.success) {
            location.href = "/login";
        } else {
            alert(res.msg);
        }
    }) 
    .catch((err) => {                 // 오류 발생시 처리한다.
        console.error(new Error("회원가입 중 에러 발생"));
    });
};