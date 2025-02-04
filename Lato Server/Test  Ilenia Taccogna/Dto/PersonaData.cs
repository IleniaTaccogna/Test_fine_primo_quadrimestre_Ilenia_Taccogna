using Microsoft.AspNetCore.Mvc;

namespace Test__Ilenia_Taccogna.Dto
{
    public class PersonaData
    {
        public static List<Persona> GetListaPersone()
        {
            return new List<Persona>
            {
                new Persona
                {
                    Id = Guid.NewGuid(),
                    Nome = "Ilenia",
                    Cognome = "Taccogna",
                    DataDiNascita = new DateTime(2001, 5, 9),
                    Dominio = Dominio.Studente,
                    Email = "ilenia@studente.com"
                },
                new Persona
                {
                    Id = Guid.NewGuid(),
                    Nome = "Silvia",
                    Cognome = "De Nicolò",
                    DataDiNascita = new DateTime(2000, 6, 2),
                    Dominio = Dominio.Studente,
                    Email = "silvy@studente.com"
                },
                new Persona
                {
                    Id = Guid.NewGuid(),
                    Nome = "Peppe",
                    Cognome = "Latrofa",
                    DataDiNascita = new DateTime(1998, 12, 12),
                    Dominio = Dominio.Docente,
                    Email = "latrofa@docente.com"
                }
            };
        }
    }
}
