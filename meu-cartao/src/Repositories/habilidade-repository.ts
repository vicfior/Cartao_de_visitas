import { HabilidadesModel } from "@/model/habilidades-model";

export interface HabilidadeRepository {
    findAll(): Promise<HabilidadesModel[]>
}   