
import api from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IPerson } from "../../interfaces/person";

export interface GetServiceProviderResponse {
    idServiceProvider: IPerson,
    imageServices: string[],
}

export class ServiceProviderService {

    static async getServiceProviderById(serviceProviderId: string): Promise<GetServiceProviderResponse> {
        const jwt = await this.getJwt();
        const res = await api.get<GetServiceProviderResponse>(`provider/${serviceProviderId}`, {headers: {Authorization: jwt}});
        return res.data;
    };

    private static async getJwt(): Promise<string> {
        return `Bearer ${ await AsyncStorage.getItem("TOKEN")}`
    };
}