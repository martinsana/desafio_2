const el = require('./elements').ELEMENTS;
class Login {
  acessarLogin() {
    cy.visit('login');
  }
  preencherCredenciais() {
    cy.get(el.inputEmail).type(Cypress.config().user.email);
    cy.get(el.inputPassword).type(Cypress.config().user.password);
  }
  submeterCredenciais() {
    cy.get(el.primaryButtonSubmit).click();
  }
}
export default new Login();
