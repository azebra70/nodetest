"use strict";

const { isatty } = require("tty");

const fs = require("fs").promises;

// const { use } = require("../routes/home");

class UserStorage {

    static #getUserInfo(data,id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userkeys = Object.keys(users);
        const userInfo = userkeys.reduce((newUser,info) => {
            newUser[info] = users[info][idx];
            return newUser;
        },{});
        // console.log(userInfo);
        return userInfo;  
    }

    static #getUsers(data,isAll,fields) {
        const users = JSON.parse(data);
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers,field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;

    }

    static getUsers(isAll, ...fields){
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
          return this.#getUsers(data,isAll,fields);
        })
        .catch(console.error);

    }

    static getUserInfo(id){
        return fs
          .readFile("./src/databases/users.json")
          .then((data) => {
            return this.#getUserInfo(data,id);
          })
          .catch(console.error);
    }

    static async save(userInfo) {
        const users = await this.getUsers(true);
        if ( users.id.includes(userInfo.id) ) {
            throw "이미 존재하는 아이디 입니다.";
        }
        users.id.push(userInfo.id);
        users.psword.push(userInfo.psword);
        users.name.push(userInfo.name);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success: true };
    }
}

module.exports = UserStorage;