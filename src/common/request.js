import axios from "axios";



const instance = axios.create({
    baseURL: "http://localhost:5000/api/v1/",
    timeout: 2000,
    headers: {
        "Content-Type": "application/json",
    }
})

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config
    },
    (error) => {
        return Promise.reject(error.message)
    }
)

const sendRequest = (config) => {
    console.log(config);
    return instance.request(config)
}

export const getRequest = (path) => {
    console.log(path);
    return sendRequest({
        method: 'GET',
        url: path
    })
}

export const addrequest = (path, data) => {
    console.log(data);
    return sendRequest({
        method: 'POST',
        url: path,
        data: data,
        headers: {
            'content-type': 'application/json'
        }
    })
}

export const deleterequest = (path, id) => {
    console.log("11111111111111", path, id);
    return sendRequest({
        method: 'DELETE',
        url: path + id
    })
}

export const editrequest = (path, data) => {
    console.log(data);
    return sendRequest({
        method: 'POST',
        url: path,
        data: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    })
}