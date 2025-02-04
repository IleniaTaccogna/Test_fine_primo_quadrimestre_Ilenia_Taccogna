using Microsoft.AspNetCore.Mvc;
using Test__Ilenia_Taccogna.Dto;


namespace Test__Ilenia_Taccogna.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class PersonaController : ControllerBase
    {

        private static List<Persona> listaPersone = new List<Persona>();
        static PersonaController()
        {
            listaPersone = PersonaData.GetListaPersone();
        }



        [HttpPost("AddPersona")]
        public ActionResult<Persona> AddPersona(Persona persona)
        {
            if (persona.Id == Guid.Empty)
            {
                persona.Id = Guid.NewGuid();
            }

            listaPersone.Add(persona);
            return CreatedAtAction(nameof(GetPersonaById), new { id = persona.Id }, persona);
        }


        [HttpGet("GetPersone")]
        public ActionResult<IEnumerable<Persona>> GetPersone()
        {
            return Ok(listaPersone);
        }

        [HttpGet("GetPersonaById/{id}")]
        public ActionResult<Persona> GetPersonaById(Guid id)
        {
            var persona = listaPersone.FirstOrDefault(p => p.Id == id);
            if (persona == null)
            {
                return NotFound();
            }
            return Ok(persona);
        }



        [HttpPut("UpdatePersona/{id}")]
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

        [HttpPut("UpdateEmail/{id}")]
        public ActionResult UpdateEmail(Guid id, string newEmail)
        {
            var existingPersona = listaPersone.FirstOrDefault(p => p.Id == id);
            if (existingPersona == null)
            {
                return NotFound();
            }

            existingPersona.Email = newEmail;

            return NoContent();
        }

        [HttpDelete("DeletePersona/{id}")]
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
