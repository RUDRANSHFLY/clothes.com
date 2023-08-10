import axios from "axios";
 
export const makeRequest = axios.create({
    baseURL : process.env.REACT_APP_API_URL,
    headers : {
        authorization : "bearer "+process.env.REACT_APP_API_TOKEN,
       },
});

export const postRequest = axios.create({
    baseURL : process.env.REACT_APP_API_URL,
    headers : {
        authorization : "bearer " + process.env.REACT_APP_USER_API_TOKEN,
    },
});

