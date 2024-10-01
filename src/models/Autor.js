"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutorModel = void 0;
var mongoose_1 = require("mongoose");
// Defineix l'esquema per al model Autor
var AutorSchema = new mongoose_1.Schema({
    nom: { type: String, required: true },
    anyNaixement: { type: Number },
    nacionalitat: { type: String }
}); // camps i propietats
// Crea el model Autor
exports.AutorModel = (0, mongoose_1.model)("Autor", AutorSchema);
