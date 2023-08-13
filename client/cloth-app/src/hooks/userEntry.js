import { postRequest } from "../makeRequest.js";


const useEntry = (data) => {
    const newdata = {
        "data" : {
            username : data.username,
            email : data.email,
            password : data.password,
        }
    }
    const url = '/usercloths/';
    const post = postRequest.post(url,newdata)
}

export default useEntry;