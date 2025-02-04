using static System.Runtime.InteropServices.JavaScript.JSType;
using Test__Ilenia_Taccogna.Dto;
using System.Runtime.Serialization;

namespace Test__Ilenia_Taccogna.Dto
{
    public enum Dominio
    {

        [EnumMember(Value = "docente")]
        Docente,

        [EnumMember(Value = "studente")]
        Studente
    }


}