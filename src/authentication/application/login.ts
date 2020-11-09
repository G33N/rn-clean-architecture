import {Credential, User} from '../domain';

export interface LoginService {
  login: (credential: Credential) => Promise<User>;
}

export class Login {
  loginService: LoginService;

  constructor(loginService: LoginService) {
    this.loginService = loginService;
  }

  async login(credential: Credential): Promise<User> {
    return this.loginService.login(credential);
  }
}
