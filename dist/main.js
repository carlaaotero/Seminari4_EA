"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("./mongoose");
var Autor_CRUD_1 = require("./CRUD/Autor_CRUD");
var Llibre_CRUD_1 = require("./CRUD/Llibre_CRUD");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var autor1, autor2, llibre1, llibre2, _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0: return [4 /*yield*/, (0, mongoose_1.connectToDatabase)()];
                case 1:
                    _k.sent();
                    return [4 /*yield*/, Autor_CRUD_1.AutorCRUD.crear({ nom: "George Orwell", anyNaixement: 1903, nacionalitat: "Britànica" })];
                case 2:
                    autor1 = _k.sent();
                    return [4 /*yield*/, Autor_CRUD_1.AutorCRUD.crear({ nom: "J.K. Rowling", anyNaixement: 1965, nacionalitat: "Britànica" })];
                case 3:
                    autor2 = _k.sent();
                    return [4 /*yield*/, Llibre_CRUD_1.LlibreCRUD.crear({ titol: "1984", autor: autor1._id, genero: "Distòpic", any: 1949 })];
                case 4:
                    llibre1 = _k.sent();
                    return [4 /*yield*/, Llibre_CRUD_1.LlibreCRUD.crear({ titol: "Harry Potter i la pedra filosofal", autor: autor2._id, genero: "Fantasia", any: 1997 })];
                case 5:
                    llibre2 = _k.sent();
                    _b = (_a = console).log;
                    _c = ['Llibres:'];
                    return [4 /*yield*/, Llibre_CRUD_1.LlibreCRUD.obtenirTots()];
                case 6:
                    _b.apply(_a, _c.concat([_k.sent()]));
                    _e = (_d = console).log;
                    _f = ['Autors:'];
                    return [4 /*yield*/, Autor_CRUD_1.AutorCRUD.obtenirTots()];
                case 7:
                    _e.apply(_d, _f.concat([_k.sent()]));
                    // Actualitzar i eliminar exemples
                    //await LlibreCRUD.actualitzar(llibre1._id, { titol: "Dixit: 1984" });
                    //await AutorCRUD.eliminar(autor2._id);
                    _h = (_g = console).log;
                    _j = ["Llibres després de l'actualització:"];
                    return [4 /*yield*/, Llibre_CRUD_1.LlibreCRUD.obtenirTots()];
                case 8:
                    // Actualitzar i eliminar exemples
                    //await LlibreCRUD.actualitzar(llibre1._id, { titol: "Dixit: 1984" });
                    //await AutorCRUD.eliminar(autor2._id);
                    _h.apply(_g, _j.concat([_k.sent()]));
                    return [2 /*return*/];
            }
        });
    });
}
main();
