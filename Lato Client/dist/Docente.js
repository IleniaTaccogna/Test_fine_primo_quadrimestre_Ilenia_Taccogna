"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Docente = void 0;
const Persona_1 = require("./Persona");
class Docente extends Persona_1.Persona {
    constructor(id, nome, cognome, dataDiNascita, dominio) {
        super(id, nome, cognome, dataDiNascita, dominio);
    }
    dettagliPersona() {
        return `Docente: ${this.nome} ${this.cognome} con Id: ${this.id} Anni: ${this.getEtà()} Email: ${this.getEmail()}`;
    }
}
exports.Docente = Docente;
