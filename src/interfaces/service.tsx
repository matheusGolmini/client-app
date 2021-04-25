export interface IService {
    id: string;
    name: string;
    end_date: Date;
    start_date: Date;
    title: string;
    image: string;
    color: string;
    status: string;
}

export interface DetailService {
    id: string
    service: string;
    nameProvider: string;
    combinedContract: string;
    is_finishing: boolean;
    is_payment: boolean;
    days: number;
    value: number;
    phone: string;
    imageProvider:string;
    start_date?: Date;
    end_date?: Date;
    color: string;
}