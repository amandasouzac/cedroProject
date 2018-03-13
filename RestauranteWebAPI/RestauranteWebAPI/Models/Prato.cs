using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace RestauranteWebAPI.Models
{
    public class Prato
    {
        [Key]
        [Required(ErrorMessage = "Campo Obrigatório")]
        public String PNome { get; set; }

        [Required(ErrorMessage = "Campo Obrigatório")]
        public float PPreco { get; set; }

        [Required(ErrorMessage = "Campo Obrigatório")]
        public String PRestaurante { get; set; }

        
        //[ForeignKey("RNome")]
        //public virtual Restaurante Restaurante { get; set; }
    }
}