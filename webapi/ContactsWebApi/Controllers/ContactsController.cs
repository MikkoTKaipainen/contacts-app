using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ContactsWebApi.Models;
using ContactsWebApi.Repositories;
using ContactsWebApi.Services;

namespace ContactsWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ContactsController : ControllerBase
    {
        private readonly IContactService _contactService;

        public ContactsController(IContactService contactRepository)
        {
            _contactService = contactRepository;
        }

        [HttpGet]
        public ActionResult<List<Contact>> GetContacts()
        {
            return new JsonResult(_contactService.Read());
        }

        [HttpGet("{id}")]
        public ActionResult<Contact> Get(int id)
        {
            return new JsonResult(_contactService.Read(id));
        }

        [HttpPut("{id}")]
        public ActionResult<Contact> Put(int id, Contact contact)
        {
            var updatedContact = _contactService.Update(id, contact);
            return updatedContact;
        }

        [HttpPost]
        public ActionResult<Contact> Post(Contact contact)
        {
            return _contactService.Create(contact);
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            _contactService.Delete(id);
            return new NoContentResult();
        }
    }
}