import useEntry, { getUserEmail } from "../hooks/userEntry.js";
import { encryptPassword, getencryptPassword } from "./Encrypt.js";
import { checkUser } from "../hooks/userOperation.js";
import { getUserPassword } from "../hooks/userOperation.js";
import Swal from 'sweetalert2'



async function signauth(data) {
    const g = await checkUser(data.username);
    if (g == 0) {
        return false;
    } else {
        var orignalPassword = await getUserPassword(data.username);
        var inputPassword = data.password;
        // console.log(`input password :- ${inputPassword}`);
        // console.log(`original password :- ${orignalPassword}`);

        var pass = getencryptPassword(inputPassword, orignalPassword);
        if (pass == true) {

            Swal.fire(
                'Sucess!',
                'Your Welcome to Clothes.com!',
                'success'
            )


            const email = await getUserEmail(data.username);
            window.localStorage.setItem('puzzel', true);
            window.localStorage.setItem("username", data.username);
            window.localStorage.setItem("password", data.password);
            window.localStorage.setItem("email", email);

            return true;
        } else {
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