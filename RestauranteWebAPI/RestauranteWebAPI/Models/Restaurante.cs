using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RestauranteWebAPI.Models
{
    public class Restaurante
    {
        [Key]
        [Required(ErrorMessage ="Campo Obrigatório")]
        public String RNome { get; set; }

        //public virtual ICollection<Prato> Pratos { get; set; }
    }
}