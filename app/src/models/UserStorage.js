"use strict";

const { use } = require("../routes/home");

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
}

module.exports = UserStorage;