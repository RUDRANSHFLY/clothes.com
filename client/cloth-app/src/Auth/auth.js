import useEntry from "../hooks/userEntry.js";
import { encryptPassword } from "./Encrypt.js";
import { checkUser } from "../hooks/userOperation.js";


async function auth(data) {
    var g = await checkUser(data.username);
    
    if(!g){
        data.password = await encryptPassword(data.password);
        useEntry(data);
        return 1 ;
    }else{
        alert("User-Exist Please Sign-in");
        return 0 ;
    }
}

export default auth;