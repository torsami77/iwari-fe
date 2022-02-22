import axios from "axios";
import {toast} from "react-toastify";

export const client = async (endpoint, body) => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(body, endpoint, user)

    // if (configData.token) {
    //     config.headers.authorization =  `Bearer ${configData.token}`
    // }

    // if (!configData.token && user?.token) {
    //     config.headers.authorization = `Bearer ${user.token}`;
    // }

    // const res = await fetch(endpoint, config);
    if(body) {
        const res = await axios.post(`${endpoint}`, body, {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${user.token}`
            }
        });
        if(user.token) {
            
        }
        console.log( res );
        const data = res.json();

        if (res.status !== 200) {
            return toast(data.statusText);
        }
        return data;
    } else {
        const {res} = await axios.get(`${endpoint}`, body);
        console.log(res);
        const data = res.json();

        if (res.status !== 200) {
            return toast(data.statusText);
        }
        return data;
    }
};

export const authenticate = async (type, body) => {
    const backendUrl = "https://iwariapi-test.herokuapp.com/api";
    console.log("Hit here", type, body);

    try {
        console.log(body);
        const { data } = await client(`${backendUrl}/${type}`, JSON.stringify(body));
        console.log(data);
        const token = data.token;
        if(token) {
            const {res: user} = await axios.post(`${backendUrl}/token/refresh`, {token});
            localStorage.setItem("user", JSON.stringify({...user, token}));
            return {...user, token};
        }
    } catch(err) {
        console.log(err.response);
    }
};