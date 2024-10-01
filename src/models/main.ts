import { connectToDatabase } from '../mongoose';
import { AutorCRUD } from '../CRUD/Autor_CRUD';
import { LlibreCRUD } from '../CRUD/Llibre_CRUD'; 
import { LlibreModel } from './Llibre';
import { AutorModel } from './Autor';
import { ObjectId } from 'mongoose'; 

async function main() {
    await connectToDatabase();

    // Crear autors
    const autor1 = await AutorCRUD.crear({ nom: "Jane Austen", anyNaixement: 1775, nacionalitat: "Britànica" });
    const autor2 = await AutorCRUD.crear({ nom: "Ken Follett", anyNaixement: 1949, nacionalitat: "Britànic" });
    const autor3 = await AutorCRUD.crear({ nom: "J.K. Rowling", anyNaixement: 1965, nacionalitat: "Espanyol" });

    // Crear llibres
    const llibre1 = await LlibreCRUD.crear({ titol: "Orgullo y prejuicio", autor: autor1._id, genero: "Romance", any: 1796 });
    const llibre2 = await LlibreCRUD.crear({ titol: "Los Pilares de la Tierra", autor: autor2._id, genero: "Ficció històrica", any: 1989 });
    const llibre3 = await LlibreCRUD.crear({ titol: "Harry Potter y la Piedra Filosofal", autor: autor3._id, genero: "Ficció fantàstica", any: 1997 });

    // Passar per pantalla tots els Llibres i els Autors 
    console.log('Llibres:', await LlibreCRUD.obtenirTots());
    console.log('Autors:', await AutorCRUD.obtenirTots());

    // Actualitzar el títol d'un llibre utilitzant l'ID del llibre
    await LlibreCRUD.actualitzar(llibre1._id.toString(), { titol: "Titol canviat" });

    // Eliminar un autor utilitzant l'ID de l'autor
    await AutorCRUD.eliminar(autor2._id.toString());

    // Agafar tots els llibres posteriors a 1900
    console.log("Llibres posteriors a 1900",await LlibreModel.aggregate([{
        $match:{any:{$gt:1900}}
    }]));
    
    // Passar per pantalla tots els Llibres i els Autors 
    console.log("Llibres després de l'actualització:", await LlibreCRUD.obtenirTots());
    console.log("Autors després de l'eliminació:", await AutorCRUD.obtenirTots());

}

// Executar la funció principal
main();
