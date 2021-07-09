/// <reference types="cypress" />
import login from '../support/pages/login';

context('Login', { browser: '!edge' }, () => {
  it('Realizar o login', () => {
    login.acessarLogin();
    login.preencherCredenciais();
    login.submeterCredenciais();
  });
});
