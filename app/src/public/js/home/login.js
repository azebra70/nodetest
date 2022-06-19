"use strict";

const    id = document.querySelector("#id"),
     psword = document.querySelector("#psword"),
   loginBtn = document.querySelector("#loginbtn");


loginBtn.addEventListener("click", login);


function login() {
    const req = {
        id : id.value,
        psword : psword.value,
    };
    console.log(req);
};
 
