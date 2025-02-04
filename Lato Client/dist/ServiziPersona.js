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
Object.defineProperty(exports, "__esModule", { value: true });
const Studente_1 = require("./Studente");
const Docente_1 = require("./Docente");
const apiUrl = 'http://localhost:5097/api/persona';
// Funzione per creare una nuova persona
function creaPersona(persona) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    persona: {
                        id: persona['id'],
                        nome: persona['nome'],
                        cognome: persona['cognome'],
                        dataDiNascita: persona['dataDiNascita'].toISOString(),
                        dominio: persona['dominio'], // Passa il dominio corretto (ad esempio 'studente' o 'docente')
                    }
                })
            });
            if (!response.ok) {
                throw new Error(`Errore nella creazione della persona: ${response.statusText}`);
            }
            const data = yield response.json();
            console.log('Persona creata:', data);
        }
        catch (error) {
            console.error('Errore nella creazione della persona:', error);
        }
    });
}
// Funzione per recuperare tutte le persone
function recuperaPersone() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Errore nel recupero delle persone: ${response.statusText}`);
            }
            const data = yield response.json();
            // Stampa i dettagli di ogni persona
            data.forEach((p) => {
                const persona = p.dominio === 'studente' ?
                    new Studente_1.Studente(p.id, p.nome, p.cognome, new Date(p.dataDiNascita), p.dominio) :
                    new Docente_1.Docente(p.id, p.nome, p.cognome, new Date(p.dataDiNascita), p.dominio);
                console.log(persona.dettagliPersona());
            });
        }
        catch (error) {
            console.error('Errore nel recupero delle persone:', error);
        }
    });
}
// Funzione per recuperare una persona tramite id
function recuperaPersonaById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${apiUrl}/${id}`);
            if (!response.ok) {
                throw new Error(`Errore nel recupero della persona con id ${id}: ${response.statusText}`);
            }
            const data = yield response.json();
            const persona = data.dominio === 'studente' ?
                new Studente_1.Studente(data.id, data.nome, data.cognome, new Date(data.dataDiNascita), data.dominio) :
                new Docente_1.Docente(data.id, data.nome, data.cognome, new Date(data.dataDiNascita), data.dominio);
            console.log(persona.dettagliPersona());
        }
        catch (error) {
            console.error(`Errore nel recupero della persona con id ${id}:`, error);
        }
    });
}
// Funzione per aggiornare una persona
function aggiornaPersona(id, persona) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${apiUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: persona['id'],
                    nome: persona['nome'],
                    cognome: persona['cognome'],
                    dataDiNascita: persona['dataDiNascita'],
                    dominio: persona['dominio'],
                })
            });
            if (!response.ok) {
                const errorText = yield response.text();
                throw new Error(`Errore nella creazione della persona: ${response.statusText}. Dettagli: ${errorText}`);
            }
            console.log(`Persona con id ${id} aggiornata.`);
        }
        catch (error) {
            console.error('Errore nell\'aggiornamento della persona:', error);
        }
    });
}
function aggiornaEmail(id, nuovaEmail) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${apiUrl}/${id}/email`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: nuovaEmail,
                })
            });
            if (!response.ok) {
                throw new Error(`Errore nell'aggiornamento dell'email della persona con id ${id}: ${response.statusText}`);
            }
            console.log(`Email della persona con id ${id} aggiornata.`);
        }
        catch (error) {
            console.error('Errore nell\'aggiornamento dell\'email:', error);
        }
    });
}
// Funzione per eliminare una persona
function eliminaPersona(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${apiUrl}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`Errore nell'eliminazione della persona con id ${id}: ${response.statusText}`);
            }
            console.log(`Persona con id ${id} eliminata.`);
        }
        catch (error) {
            console.error('Errore nell\'eliminazione della persona:', error);
        }
    });
}
// Creiamo una nuova persona
// Se l'ID deve essere un numero
const nuovoStudente = new Studente_1.Studente('esoidf-34-fdsferf-fe4w-t54-f-ew4r-4', 'Jack', 'Daniel', new Date('2000-01-01'), 'studente');
creaPersona(nuovoStudente);
// Recuperiamo tutte le persone
recuperaPersone();
// Recuperiamo una persona specifica
recuperaPersonaById("9f90d13c-6588-4dc7-aa90-38b549f55430");
// Aggiorniamo una persona
const personaAggiornata = new Studente_1.Studente("", 'Luca', 'Bianchi', new Date('1999-01-01'), 'studente');
aggiornaPersona("9f90d13c-6588-4dc7-aa90-38b549f55430", personaAggiornata);
aggiornaEmail("e5b2a67f-e008-44e7-8596-8450465ac080", 'itacco@studente.com');
// Eliminiamo una persona
eliminaPersona("e9f90d13c-6588-4dc7-aa90-38b549f55430");
