using Microsoft.AspNetCore.Mvc;
using Test__Ilenia_Taccogna.Dto;


namespace Test__Ilenia_Taccogna.Controllers
{
    [ApiController]
    [Route("api/persona")]

    public class PersonaController : ControllerBase
    {

        private static List<Persona> listaPersone = new List<Persona>();
        static PersonaController()
        {
            listaPersone = PersonaData.GetListaPersone();
        }



        [HttpPost]
        public ActionResult<Persona> AddPersona(Persona persona)
        {
            if (persona.Id == Guid.Empty)
            {
                persona.Id = Guid.NewGuid();
            }

            listaPersone.Add(persona);
            return CreatedAtAction(nameof(GetPersonaById), new { id = persona.Id }, persona);
        }


        [HttpGet]
        public ActionResult<IEnumerable<Persona>> GetPersone()
        {
            return Ok(listaPersone);
        }

        [HttpGet("{id}")]
        public ActionResult<Persona> GetPersonaById(Guid id)
        {
            var persona = listaPersone.FirstOrDefault(p => p.Id == id);
            if (persona == null)
            {
                return NotFound();
            }
            return Ok(persona);
        }



        [HttpPut("{id}")]
        public ActionResult UpdatePersona(Guid id, Persona persona)
        {
            var existingPersona = listaPersone.FirstOrDefault(p => p.Id == id);
            if (existingPersona == null)
            {
                return NotFound();
            }


            existingPersona.Nome = persona.Nome;
            existingPersona.Cognome = persona.Cognome;
            existingPersona.DataDiNascita = persona.DataDiNascita;

            return NoContent();
        }

        [HttpPut("email/{id}")]
        public ActionResult UpdateEmail(Guid id, string newEmail)
        {
            var existingPersona = listaPersone.FirstOrDefault(p => p.Id == id);
            if (existingPersona == null)
            {
                return NotFound();
            }

            // Calcolare la nuova email secondo la logica definita
            existingPersona.Email = newEmail;  

            return NoContent();
        }


        [HttpDelete("{id}")]
        public ActionResult DeletePersona(Guid id)
        {
            var persona = listaPersone.FirstOrDefault(p => p.Id == id);
            if (persona == null)
            {
                return NotFound();
            }

            listaPersone.Remove(persona);

            return NoContent();
        }
    }
}
