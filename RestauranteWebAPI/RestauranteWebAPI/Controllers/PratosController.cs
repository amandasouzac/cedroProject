using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using RestauranteWebAPI.DAL;
using RestauranteWebAPI.Models;

namespace RestauranteWebAPI.Controllers
{
    public class PratosController : ApiController
    {
        private WebAPIContext db = new WebAPIContext();

        // GET: api/Pratos
        public IQueryable<Prato> GetPrato()
        {
            return db.Prato;
        }

        // GET: api/Pratos/5
        [ResponseType(typeof(Prato))]
        public IHttpActionResult GetPrato(string id)
        {
            Prato prato = db.Prato.Find(id);
            if (prato == null)
            {
                return NotFound();
            }

            return Ok(prato);
        }

        // PUT: api/Pratos/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPrato(string id, Prato prato)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != prato.PNome)
            {
                return BadRequest();
            }

            db.Entry(prato).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PratoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Pratos
        [ResponseType(typeof(Prato))]
        public IHttpActionResult PostPrato(Prato prato)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Prato.Add(prato);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (PratoExists(prato.PNome))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = prato.PNome }, prato);
        }

        // DELETE: api/Pratos/5
        [ResponseType(typeof(Prato))]
        public IHttpActionResult DeletePrato(string id)
        {
            Prato prato = db.Prato.Find(id);
            if (prato == null)
            {
                return NotFound();
            }

            db.Prato.Remove(prato);
            db.SaveChanges();

            return Ok(prato);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PratoExists(string id)
        {
            return db.Prato.Count(e => e.PNome == id) > 0;
        }
    }
}