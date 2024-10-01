import { AutorModel } from '../models/Autor';
import { ObjectId } from 'mongoose';

// Funcions CRUD per autors
export const AutorCRUD = {
    obtenirTots: async () => {
        return await AutorModel.find();
    },
    trobarPerId: async (id: string | ObjectId) => {
        return await AutorModel.findById(id);
    },
    crear: async (entrada: any) => {
        return await AutorModel.create(entrada);
    },
    actualitzar: async (id: string | ObjectId, cos: any) => {
        return await AutorModel.findByIdAndUpdate(id, cos, { new: true });
    },
    eliminar: async (id: string | ObjectId) => {
        return await AutorModel.findByIdAndDelete(id);
    }
};

