import axios from "axios";
import { store } from '../redux/store';
import { authApi } from "./services/authApi";

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
      let res = error.response;
      const state = store.getState();
      if (res.status == 401 && state.auth.isLogin) {
        try {
          const hitRefreshApi = async () => {
            await authApi.refresh({
              refreshToken: `${state.auth.account.tokens.refresh.token}`
            }).then((res) => {
              console.log(res);
            })
          }

          hitRefreshApi();
        } catch {
          console.log("expired refresh token");
          localStorage.clear();
          router.push('/login');
          // return Promise.reject(error);
        }
      }
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