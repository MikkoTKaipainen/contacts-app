
export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;

  constructor(id?: number, firstName?: string, lastName?: string, phone?: string, email?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
  }
}
