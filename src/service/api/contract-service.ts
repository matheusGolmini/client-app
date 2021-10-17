
import api from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IConstract {
    clientEmail: string,
    longDescription: string,
    briefDescription: string,
    startDate: string,
    endDate: string,
    amountTotal: string;
    agreement: string;
    terminated_service_provider: boolean;
}

export interface IConstractResponse extends IConstract {
    status: string;
    id: string;
    link: string;
    phone: string;
    imageProfile: string;
    firstName: string;
    serviceProviderId: string;
    skillImage: string;
    skillId: string;
    skillName: string;
}


export interface IConstractFinishi extends IConstractResponse {
    rating?: number;
}

export class ConstractService {


    static async getWaitingPayment(): Promise<IConstractResponse[]> {
        const jwt = await this.getJwt();
        const res = await api.get<IConstractResponse[]>('contract/client/waiting-payment', {headers: {Authorization: jwt}});
        return res.data;
    };

    static async getInprogress(): Promise<IConstractResponse[]>{
        const jwt = await this.getJwt();
        const res = await api.get<IConstractResponse[]>('contract/client/in-progress', {headers: {Authorization: jwt}});
        return res.data;
    }

    static async getFinished(): Promise<IConstractResponse[]> {
        const jwt = await this.getJwt();
        const res = await api.get<IConstractResponse[]>('contract/client/finished', {headers: {Authorization: jwt}});
        return res.data;
    }

    static async updateStatus(contractId: string, data: {status: string}): Promise<IConstractResponse[]> {
        const jwt = await this.getJwt();
        const res = await api.patch<IConstractResponse[]>(`contract/${contractId}`, data, {headers: {Authorization: jwt}});
        return res.data;
    }

    private static async getJwt(): Promise<string> {
        return `Bearer ${ await AsyncStorage.getItem("TOKEN")}`
    };
}