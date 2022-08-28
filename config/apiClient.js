import axios from "axios";
import { store } from '../redux/store';

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    // headers: {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json',
    // }
    headers:{"Accept":"application/json, text/plain, /","Content-Type": "multipart/form-data"}
});

axiosClient.interceptors.request.use((config) => {
    const state = store.getState();
    if (state.auth.account) {
        const token = state.auth.account.tokens.access.token;
        config.headers = config.headers || {};
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
});

axiosClient.interceptors.response.use(  
    function (response) {
      return response;
    }, 
    function (error) {
      // let res = error.response;
      // console.log(res);
    //   if (res.status == 401) {
    //     window.location.href = “https://example.com/login”;
    //   }
      // console.error("Looks like there was a problem. Status Code: " + res.status);
      return Promise.reject(error);
      // return res;
    }
);

export { 
    axiosClient 
};