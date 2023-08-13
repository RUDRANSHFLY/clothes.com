import { postRequest } from "../makeRequest.js"

export async function getUserPassword(username) {
    const user = username ;
    const url = `/usercloths?[filters][username][$eq]=${user}`
    const res = await postRequest.get(url);
    console.log(res.data.data[0].attributes.password);
    const orignalPassword = res.data.data[0].attributes.password;
    return orignalPassword;
}

export async function checkUser(username) {
    const user = username ;
    const url = `/usercloths?[filters][username][$eq]=${user}`
    const res = await postRequest.get(url);
    const l = await res.data.data.length;
   
   if(l){
        console.log("USER-EXIST");
        return 1;
    }else{
        console.log("USER-NOT-EXIST");
        return 0 ;
    }
}