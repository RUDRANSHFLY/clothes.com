import { useParams } from "react-router";
import useEntry from "../hooks/userEntry.js";


function auth(data) {
    
    console.log(data);
    useEntry(data);
}

export default auth;