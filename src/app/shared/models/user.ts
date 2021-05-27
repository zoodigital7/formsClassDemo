export class User {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  gender: string
  country: string
  constructor({
    id = 0,
    firstName = '',
    lastName = '',
    email = '',
    phone = '',
    gender = '',
    country = '',
    ...rest
  }) {
    Object.assign(this, rest)
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.phone = phone
    this.country = country
  }
}
