import useEntry from "../hooks/userEntry.js";
import { encryptPassword, getencryptPassword } from "./Encrypt.js";
import { checkUser } from "../hooks/userOperation.js";
import { getUserPassword } from "../hooks/userOperation.js";
import { notify } from "./SignIn/SignIn.jsx";



async function signauth(data) {
    const g = await checkUser(data.username);

    if(g == 0){
        return false ;
    }else{
        var orignalPassword = await getUserPassword(data.username);
        var inputPassword = data.password;
        console.log(`input password :- ${inputPassword}`);
        console.log(`original password :- ${orignalPassword}`);

        var pass = getencryptPassword(inputPassword, orignalPassword);
        if(pass == true){
            notify();
            return true;
        }else{
            alert("WRONG PASSWORD OR WRONG USERNAME");
            return false;
        }
    }
}

export default signauth;