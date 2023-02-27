export interface User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    userStatus: number;
}

export interface UserCreds {
    username: string;
    password: string;
    email: string;
}

export class User implements User {
    constructor(user: User) {
        this.username = user.username;
        this.password = user.password;
    }
}