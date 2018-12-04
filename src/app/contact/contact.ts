export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  streetAddress: string;
  postalCode: string;
  city: string;

  constructor(id?: number, firstName?: string, lastName?: string, phone?: string, email?: string, streetAddress?: string, postalCode?: string, city?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.streetAddress = streetAddress;
    this.postalCode = postalCode;
    this.city = city;
  }
}
