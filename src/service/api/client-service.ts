import AsyncStorage from "@react-native-async-storage/async-storage";
import { IPerson } from "../../interfaces/person";
import { IUpdatePerson } from "../../interfaces/update-person";
import api from "../config";

interface ILogin {
    username: string;
    password: string;
}

interface ILoginResponse {
    access_token: string, 
    name: string,
    person: IPerson
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
        AsyncStorage.setItem("person", JSON.stringify(res.data.person));
        return res.data;
    }

    static async upadatePerson(data: IUpdatePerson): Promise<void>  {
        const personString = String(await AsyncStorage.getItem("person"));
        const person = JSON.parse(personString) as IPerson;
        const jwt = await this.getJwt();
        await api.patch(`client/${person.id}`, data,{headers: {Authorization: jwt}});

        Object.assign(person, data);
        AsyncStorage.setItem("person", JSON.stringify(person));
        
    };

    private static async getJwt(): Promise<string> {
        return `Bearer ${ await AsyncStorage.getItem("TOKEN")}`
    }
}