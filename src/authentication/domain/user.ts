import {Email} from './email';

interface UserInterface {
  _firstName: string;
  _lastName: string;
  _email: Email;
}

export class User implements UserInterface {
  _firstName: string;
  _lastName: string;
  _email: Email;

  constructor(firstName: string, lastName: string, email: string) {
    if (isEmptyOrNull(firstName) || isEmptyOrNull(lastName)) {
      throw new Error('You must fill first name and last name');
    }

    this._email = new Email(email);
    this._firstName = firstName.toLocaleLowerCase();
    this._lastName = lastName.toLocaleLowerCase();
  }

  get email(): string {
    return this._email.address;
  }

  get name(): string {
    return `${this._firstName} ${this._lastName}`;
  }
}

function isEmptyOrNull(word: string) {
  return !word || word.trim().length === 0;
}
