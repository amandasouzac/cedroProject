using RestauranteWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace RestauranteWebAPI.DAL
{
    public class WebAPIContext : DbContext
    {
        public WebAPIContext() : base("RestauranteConnectionString") { }

        public DbSet<Restaurante> Restaurantes { get; set; }

        public DbSet<Prato> Prato { get; set; }
    }
}