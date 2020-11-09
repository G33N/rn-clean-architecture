import {RegisterService, LoginService} from '../application';
import {Credential, Email, User} from '../domain';

// TODO: add http request, axios.
export class AuthService implements LoginService, RegisterService {
  async login(credential: Credential): Promise<User> {
    return Promise.resolve(new User('Sample Service', 'User', 'test@test.com'));
  }

  async register(user: User, credential: Credential): Promise<User> {
    return Promise.resolve(user);
  }

  async verifyExistingEmail(email: Email): Promise<boolean> {
    return Promise.resolve(false);
  }
}
