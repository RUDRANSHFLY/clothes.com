import useEntry from "../hooks/userEntry.js";
import { encryptPassword } from "./Encrypt.js";
import { checkUser } from "../hooks/userOperation.js";
import Swal from 'sweetalert2'


async function auth(data) {
    var g = await checkUser(data.username);
    
    if(!g){
        data.password = await encryptPassword(data.password);
        useEntry(data);
        Swal.fire(
            'User Created!',
            'Usre cReated for the clothes.com now Sign-in!',
            'success'
          )
        return 1 ;
    }else{
        await Swal.fire(
            'User Already Exist!',
            'Please Sign-in To move-on!',
            'error'
          )
        return 0 ;
    }
}

export default auth;