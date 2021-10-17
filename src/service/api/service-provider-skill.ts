import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../config";

export interface ServiceSkillResponse {
  id: string,
  created_at: string,
  updated_at:string,
  deleted_at: string | null,
  additionalInfo: string,
  startDate: string,
  idSkill: string,
  idServiceProvider: string,
  skill: {
    id: string,
    name: string,
    description: string,
    imageUrl: string
  },
  serviceProvider: {
    idApprover: string | null,
    approved: boolean,
    cnpj: string,
    joinDate: string | null,
    imageDocument: string,
    imageServices: string,
    accountNumber: string,
    workPlaces: string[],
    descriptionNotApproved: string | null,
    idServiceProvider: {
      id: string,
      created_at: string,
      updated_at: string,
      deleted_at: string,
      firstName: string,
      lastName: string,
      email: string,
      phone: string,
      cpf: string,
      rg: string,
      imageProfile: string,
      id_html: string | null,
      sex: string,
      isAdmin: boolean,
      isBlocked: boolean,
      rating: number | null;
    }
  }
}

export class ServiceProviderSkillService {
    static async getServicesByAddressAndSkill(skillId: string) {
        const jwt = await this.getJwt();
        const res = await api.get<ServiceSkillResponse[]>(`service-provider-skill/skills/${skillId}`,{headers: {Authorization: jwt}});
        return res.data;
    }

    static async getSkillByServiceProvider(serviceProviderId: string): Promise<ServiceSkillResponse> {
      const jwt = await this.getJwt();
      const res = await api.get<ServiceSkillResponse>(`service-provider-skill/service-provider/${serviceProviderId}`, {headers: {Authorization: jwt}});
      return res.data;
    };

    private static async getJwt(): Promise<string> {
        return `Bearer ${ await AsyncStorage.getItem("TOKEN")}`
    }
}