"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LlibreModel = void 0;
var mongoose_1 = require("mongoose");
// Defineix l'esquema per al model Llibre
var LlibreSchema = new mongoose_1.Schema({
    titol: { type: String, required: true },
    autor: { type: String, required: true },
    genero: { type: String },
    any: { type: Number }
});
// Crea el model Llibre
exports.LlibreModel = (0, mongoose_1.model)("Llibre", LlibreSchema);
