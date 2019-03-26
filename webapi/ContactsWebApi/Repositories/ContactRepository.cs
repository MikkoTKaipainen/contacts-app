using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;

namespace ContactsWebApi.Repositories
{
    public class ContactRepository : IContactRepository
    {
        private readonly ContactdbContext _context;

        public ContactRepository(ContactdbContext context)
        {
            _context = context;
        }

        public Contact Create(Contact contact)
        {
            _context.Add(contact);
            _context.SaveChanges();
            return contact;
        }

        public Contact Delete(Contact contact)
        {
            _context.Contact.Remove(contact);
            _context.SaveChanges();
            return contact;
        }

        public List<Contact> Read()
        {
            return _context.Contact.ToList();
        }

        public Contact Read(int id)
        {
            return _context.Contact.FirstOrDefault(p => p.Id == id);
        }

        public Contact Update(Contact contact)
        {
            _context.Update(contact);
            _context.SaveChanges();
            return contact;
        }
    }
}
