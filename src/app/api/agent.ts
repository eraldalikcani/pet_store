import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { User, UserCreds } from "../models/user";
import { router } from "../router/Routes";


axios.defaults.baseURL = "https://petstore.swagger.io/v2/";

const responseBody = (response : AxiosResponse) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody)
}

//create an object to store our requests for our catalog of available pets
const Catalog = {
    list: () => requests.get("pet/findByStatus?status=available"),
}

const Account = {
    current: (username: string) => requests.get(`user/${username}`),
    login: (username: string, password: string) => requests.get(`user/login?username=${username}&password=${password}`),
    logout: () => requests.get("user/logout"),
    register: (user: UserCreds) => requests.post<User>('user', user)
}

const agent = {
    Catalog,
    Account
}

export default agent;
