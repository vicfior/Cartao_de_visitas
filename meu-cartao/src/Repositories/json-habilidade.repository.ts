import { HabilidadesModel } from "@/model/habilidades-model";
import { HabilidadeRepository } from "./habilidade-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const DATA_DIR = resolve(ROOT_DIR, "src", "db", "seed", "habilidades.json");


export class JsonNoticiaRepository implements HabilidadeRepository{

    async findAll(): Promise<HabilidadesModel[]>{
        const json_content = await readFile(DATA_DIR, 'utf-8');
        const habilidade_array = JSON.parse(json_content.toString());
        const{ habilidades } = habilidade_array;

        return habilidades;
    }
}

export const jsonNoticiaRepository = new JsonNoticiaRepository();