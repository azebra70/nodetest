"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor (body) {
        this.body = body;
    }

    async login() {
        //const {id,psword} = UserStorage.getUsers("id","psword")
        const client = this.body;
        const {ID,PSWORD} = await UserStorage.getUserInfo(client.id);
        console.log(ID);
        // const  = await UserStorage.getUserInfo(client.id);

        
        if(ID) {
            if(ID === client.id  && PSWORD === client.psword){
                return { success: true};
            };
            return {
                success: false,
                msg: "패스워드가 틀렸습니다.",
            };
        }
        return {
            success: false,
            msg: "존재하지 않는 아이디 입니다.",
        };
    }

    async register(){
        const client = this.body;
        try{
            const response =  await UserStorage.save(client);
            return response;
        } catch (err) {
            return { success:false, msg: err} ;
        }

    }
}

module.exports = User;
  