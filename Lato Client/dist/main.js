"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Studente_1 = require("./Studente");
const Docente_1 = require("./Docente");
let studente = new Studente_1.Studente("e5b2a67f-e008-44e7-8596-8450465ac080", "Ilenia", "Taccogna", new Date(1995, 5, 15), 'studente');
let docente = new Docente_1.Docente("e5b2a67f-e008-44s7-8596-8450465bc080", "Leonardo", "Galluzzi", new Date(1995, 5, 15), 'docente');
console.log(studente.dettagliPersona());
