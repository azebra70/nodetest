"use strict";

// const { isatty } = require("tty");

// const fs = require("fs").promises;

// const { use } = require("../routes/home");
const oracledb = require("oracledb");
const db = require("../config/db");

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
        // return fs
        // .readFile("./src/databases/users.json")
        // .then((data) => {
        //   return this.#getUsers(data,isAll,fields);
        // })
        // .catch(console.error);

    }

    static async getUserInfo(id){
        // oracledb.initOracleClient({ libDir: 'C:\\instantclient_19_15' });
        const connection = await oracledb.getConnection(db);

        const query = "select * from TEST_USERS where ID = :id";
        const binds = [id];
        const options = {
            outFormat: oracledb.OUT_FORMAT_OBJECT   // query result format
          };
        
        return new Promise ((resolve,reject) => {
            connection.execute(query,binds, options, function(err,result){
                if (err) {
                    reject(err);
                } else {
                    resolve(result.rows[0]);
                }
            });
        }); 

        // return fs
        //   .readFile("./src/databases/users.json")
        //   .then((data) => {
        //     return this.#getUserInfo(data,id);
        //   })
        //   .catch(console.error);
    }

    static async save(userInfo) {
        // oracledb.initOracleClient({ libDir: 'C:\\instantclient_19_15' });
        const connection = await oracledb.getConnection(db);

        const query = "INSERT INTO TEST_USERS (ID, PSWORD, NAME) VALUES (:id, :psword, :name)";
        const binds = [userInfo.id,userInfo.psword,userInfo.name];
        const options = { autoCommit: true };

        return new Promise ((resolve,reject) => {
            connection.execute(query,binds, options, function(err){
                if (err) {
                    reject(err);
                } else {
                    resolve({success : true});
                }
            });
        }); 

        // conn.execute("insert into notice(notice_id,writer,title,content) values(seq_notice.nextval,'"+writer+"','"+title+"','"+content+"')",function(err,result){
        //     if(err){
        //         console.log("등록중 에러가 발생했어요!!", err);
        //         response.writeHead(500, {"ContentType":"text/html"});
        //         response.end("fail!!");
        //     }else{
        //         console.log("result : ",result);
        //         response.writeHead(200, {"ContentType":"text/html"});
        //         response.end("success!!");
        //     }


        // const users = await this.getUsers(true);
        // if ( users.id.includes(userInfo.id) ) {
        //     throw "이미 존재하는 아이디 입니다.";
        // }
        // users.id.push(userInfo.id);
        // users.psword.push(userInfo.psword);
        // users.name.push(userInfo.name);
        // fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        // return { success: true };
    }
}

module.exports = UserStorage;