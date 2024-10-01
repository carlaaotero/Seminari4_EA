import { Schema, model } from "mongoose";


// Defineix la interfície per al model Llibre
export interface ILlibre {
    titol: string;
    autor: string;
    genero: string;
    any: number;
}

// Defineix l'esquema per al model Llibre
const LlibreSchema = new Schema<ILlibre>({
    titol: { type: String, required: true },
    autor: { type: String, required: true },
    genero: { type: String },
    any: { type: Number }
});

// Crea el model Llibre
export const LlibreModel = model("Llibre", LlibreSchema);


