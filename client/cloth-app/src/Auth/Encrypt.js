import bcrypt from "bcryptjs-react";
const saltRounds = 10 ;


export function encryptPassword(password){
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    password = hash ;
    return password;
}

export function getencryptPassword(password,orignalPassword) {
   var checkpassword = bcrypt.compareSync(password, orignalPassword)
    if(checkpassword == true){
        return true;
    }else{
        return false;
    }
}