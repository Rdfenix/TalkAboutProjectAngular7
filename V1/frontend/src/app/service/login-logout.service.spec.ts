import { TestBed } from '@angular/core/testing';

import { LoginLogoutService } from './login-logout.service';

describe('LoginLogoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginLogoutService = TestBed.get(LoginLogoutService);
    expect(service).toBeTruthy();
  });
});
