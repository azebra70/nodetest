"use strict";

// const { use } = require("../routes/home");

class UserStorage {
    static #users = {
        id : ["K1234","O123","j3456"],
        psword : ["1234","123","3456"],
        name : ["홍길동","이순신","장영실"],
    };

    static getUsers(...fields){
        const users = this.#users; 
        const newUsers = fields.reduce((newUsers,field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userkeys = Object.keys(users);
        const userInfo = userkeys.reduce((newUser,info) => {
            newUser[info] = users[info][idx];
            return newUser;
        },{});

        return userInfo;
    }
}

module.exports = UserStorage;