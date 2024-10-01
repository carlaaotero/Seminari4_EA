import { LlibreModel } from '../models/Llibre';
import { ObjectId } from 'mongoose';

// Funcions CRUD per llibres
export const LlibreCRUD = {
    obtenirTots: async () => {
        return await LlibreModel.find();
    },
    trobarPerId: async (id: string | ObjectId) => {
        return await LlibreModel.findById(id);
    },
    crear: async (entrada: any) => {
        return await LlibreModel.create(entrada);
    },
    actualitzar: async (id: string | ObjectId, cos: any) => {
        return await LlibreModel.findByIdAndUpdate(id, cos, { new: true });
    },
    eliminar: async (id: string | ObjectId) => {
        return await LlibreModel.findByIdAndDelete(id);
    }
    
};

