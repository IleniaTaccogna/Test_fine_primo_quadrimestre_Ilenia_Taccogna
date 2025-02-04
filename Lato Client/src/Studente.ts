import { Persona, Dominio } from './Persona';

class Studente extends Persona {

    constructor(id: string, nome: string, cognome: string, dataDiNascita: Date, dominio:Dominio) {
        super(id, nome, cognome, dataDiNascita, dominio);
    }

    dettagliPersona(): string {
        return `Studente: ${this.nome} ${this.cognome} con Id: ${this.id} Anni: ${this.getEtà()} Email: ${this.getEmail()}`;
    }
}
export { Studente }