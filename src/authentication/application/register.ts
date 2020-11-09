import {Credential, User, Email} from '../domain';

export interface RegisterService {
  register: (user: User, credential: Credential) => Promise<User>;
  verifyExistingEmail: (email: Email) => Promise<boolean>;
}

export class Register {
  registerService: RegisterService;

  constructor(registerService: RegisterService) {
    this.registerService = registerService;
  }

  async signUp(
    firstName: string,
    lastName: string,
    credential: Credential,
  ): Promise<User> {
    const emailInUse = await this.registerService.verifyExistingEmail(
      credential._email,
    );
    if (emailInUse) {
      throw new Error(
        "There's an User with this email, if you forgot your pass...",
      );
    }

    const user = new User(firstName, lastName, credential.email);
    return this.registerService.register(user, credential);
  }
}
