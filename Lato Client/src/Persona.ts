export type Dominio = 'studente' | 'docente';

abstract class Persona {

    constructor(
        protected id: string,
        protected nome: string,
        protected cognome: string,
        protected dataDiNascita: Date,
        protected dominio: Dominio
    ) { }

    abstract dettagliPersona(): string;

    getEmail(): string {
        let nome = this.nome.toLowerCase();
        let cognome = this.cognome.toLowerCase();
        let dominio = this.dominio;
        return `${nome[0]}${cognome}@${dominio}.com`;
    }

    getEtà(): number {
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

export { Persona };



