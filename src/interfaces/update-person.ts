import { IPerson } from './person'

export interface IUpdatePerson extends Partial<IPerson>{
    password?: string;
}
