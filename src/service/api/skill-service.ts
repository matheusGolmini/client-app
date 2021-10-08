
import { ISkill } from "../../interfaces";
import api from "../config";

export class SkillService {
    static async getSkills(): Promise<ISkill[]> {
        const value = await api.get<ISkill[]>('skill');
        return value.data;
    }
}