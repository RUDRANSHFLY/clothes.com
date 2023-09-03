import useEntry from "../hooks/userEntry.js";
import { encryptPassword, getencryptPassword } from "./Encrypt.js";
import { checkUser } from "../hooks/userOperation.js";
import { getUserPassword } from "../hooks/userOperation.js";
import { notify } from "./SignIn/SignIn.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setData } from "./Profile/Profile.jsx";
import Swal from 'sweetalert2'


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
           setData(data.username,data.password);
           Swal.fire(
            'Sucess!',
            'Your Welcome to Clothes.com!',
            'success'
          )
           return true;
        }else{
            Swal.fire(
                'OOPS SOMETHING WRONG!',
                'User not Exist or Might Have Entered Wrong Credential!',
                'error'
              )
            return false;
        }
    }
}

export default signauth;