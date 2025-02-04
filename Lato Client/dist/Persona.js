"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(id, nome, cognome, dataDiNascita, dominio) {
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.dataDiNascita = dataDiNascita;
        this.dominio = dominio;
    }
    getEmail() {
        let nome = this.nome.toLowerCase();
        let cognome = this.cognome.toLowerCase();
        let dominio = this.dominio;
        return `${nome[0]}${cognome}@${dominio}.com`;
    }
    getEtà() {
        const oggi = new Date();
        const anni = oggi.getFullYear() - this.dataDiNascita.getFullYear();
        const meseDifferenza = oggi.getMonth() - this.dataDiNascita.getMonth();
        const giornoDifferenza = oggi.getDate() - this.dataDiNascita.getDate();
        if (meseDifferenza < 0 || (meseDifferenza === 0 && giornoDifferenza < 0)) {
            return anni - 1;
        }
        return anni;
    }
}
exports.Persona = Persona;
