import React from "react";
import {
    useEffect,
    useState,
} from "react";
import { makeRequest } from "../makeRequest.js";

const [data, setdata] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);



const useFetch = (url) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await makeRequest.get(url,
                    {
                        headers: {
                            authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
                        }
                    });
                setdata(res.data.data);
            } catch (error) {
                setError(true);
                console.log(error);
            }
            setLoading(false);
        }
        fetchData();
    }, [url]);

    return {
        data ,
        loading ,
        error,
    }
} 

export default useFetch;