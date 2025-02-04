"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Studente = void 0;
const Persona_1 = require("./Persona");
class Studente extends Persona_1.Persona {
    constructor(id, nome, cognome, dataDiNascita, dominio) {
        super(id, nome, cognome, dataDiNascita, dominio);
    }
    dettagliPersona() {
        return `Studente: ${this.nome} ${this.cognome} con Id: ${this.id} Anni: ${this.getEtà()} Email: ${this.getEmail()}`;
    }
}
exports.Studente = Studente;
