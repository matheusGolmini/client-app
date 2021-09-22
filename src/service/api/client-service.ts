import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../config";

interface ILogin {
    username: string;
    password: string;
}

interface ILoginResponse {
    access_token: string, 
    name: string
}

interface ILoginToken {
    token: string, 
}

export class ClientService {
    static async login(data: ILogin) {
        const res = await api.post<ILoginResponse>('login', data);
        AsyncStorage.setItem("TOKEN", res.data.access_token);
        return res.data;
    }

    static async loginToken(token: ILoginToken) {
        const res = await api.post<ILoginResponse>('login-token', token);
        AsyncStorage.setItem("TOKEN", res.data.access_token);
        return res.data;
    }
}