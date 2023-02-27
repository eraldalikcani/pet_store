import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { User, UserCreds } from "../models/user";
import { router } from "../router/Routes";
import { store } from "./store";

export default class UserStore {
    userLogged: User | null = null;

    constructor() {
        makeAutoObservable(this)
    }

    get isLoggedIn() {
        return !!this.userLogged;
    }

    login = async (username: string, password: string) => {
        try {
            const user = await agent.Account.login(username, password);
            runInAction(() => this.userLogged = user);
            router.navigate('/Pets');
            store.modalStore.closeModal();
        } catch (error) {
            throw error;
        }
    }

    register = async (creds: UserCreds) => {
        try {
            const creds = {
                "id": 23101998,
                "username": "eralda1998",
                "firstName": "eralda",
                "lastName": "1998",
                "email": "eralda1998@gmail.com",
                "password": "password",
                "phone": "123456789",
                "userStatus": 1
              };
            const user = await agent.Account.register(creds);
            runInAction(() => this.userLogged = user);
            router.navigate('/Pets');
            store.modalStore.closeModal();
        } catch (error) {
            throw error;
        }
    }

    logout = () => {
        this.userLogged = null;
        router.navigate('/');
    }

    getUser = async (username: string) => {
        try {
            const user = await agent.Account.current(username);
            runInAction(() => this.userLogged = user);
        } catch (error) {
            console.log(error);
        }
    }

    setDisplayName = (username: string) => {
        if (this.userLogged) this.userLogged.username = username;
    }
}