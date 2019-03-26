using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;

namespace ContactsWebApi.Repositories
{
    public interface IContactRepository
    {
        Contact Create(Contact contact);
        List<Contact> Read();
        Contact Read(int id);
        Contact Update(Contact contact);
        Contact Delete(Contact contact);
    }
}
