import axios from "axios";
import {toast} from "react-toastify";

export const client = async (endpoint, {body, ...configData} = {}) => {
    const user = JSON.parse(localStorage.getItem("user"));

    const config = {
        method: body ? "POST" : "GET",
        ...configData,
        header: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
    };

    if(body) {
        config.body = JSON.stringify(body);
    }

    if (configData.token) {
        config.headers.authorization =  `Bearer ${configData.token}`
    }

    if (!configData.token && user?.token) {
        config.headers.authorization = `Bearer ${user.token}`;
    }

    const res = await fetch(endpoint, config);
    const data = await res.json();

    if(res.status !== 200) {
        return toast(data.message)
    }

    return data;
};

export const authenticate = async (type, data) => {
    const backendUrl = process.env.REACT_API_SERVER;

    try {
    const { data: token } = await client(`${backendUrl}/${type}`, {
        body: data,
    });

    if (token) {
        const { data: user } = await client(`${backendUrl}/token/refresh`, { token });

        localStorage.setItem("user", JSON.stringify({ ...user, token }));

        return { ...user, token };
    }
    } catch (err) {
    console.log(err);
    }
};