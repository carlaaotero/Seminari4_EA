import { Schema, model } from "mongoose";

// Defineix la interfície per al model Autor
export interface IAutor {
    nom: string;
    anyNaixement: number;
    nacionalitat: string;
}

// Defineix l'esquema per al model Autor
const AutorSchema = new Schema<IAutor>({
    nom: { type: String, required: true },
    anyNaixement: { type: Number },
    nacionalitat: { type: String }
}); // camps i propietats

// Crea el model Autor
export const AutorModel = model("Autor", AutorSchema);
