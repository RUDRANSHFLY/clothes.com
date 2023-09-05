import { postRequest } from "../makeRequest.js";



export const getUserEmail = async (username) => {
    const url = `/usercloths?[filters][username][$eq]=${username}`;
    const get = await postRequest.get(url);
    const userEmail = await get.data.data[0].attributes.email;
    return userEmail;
}

export const getUserId = async (username) => {
    if (window.localStorage.getItem('puzzel') == 'true') {
        const url = `/usercloths?[filters][username][$eq]=${username}`;
        const get = await postRequest.get(url);
        return get.data.data[0].id;
    }

}

const useEntry = (data) => {
    const newdata = {
        "data": {
            username: data.username,
            email: data.email,
            password: data.password,
        }
    }
    const url = '/usercloths/';
    const post = postRequest.post(url, newdata)
}

export default useEntry;