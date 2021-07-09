const faker = require('faker');
const el = require('./elements').ELEMENTS;
class Cadastro {
  acessarCadastro() {
    cy.visit('register');
  }
  preencherCadastro() {
    cy.get(el.inputUsername).type(
      faker.name.firstName() + faker.name.lastName()
    );
    cy.get(el.inputEmail).type(faker.internet.email());
    cy.get(el.inputPassword).type('123456778');
  }

  submeterCadastro() {
    cy.get(el.primaryButtonSubmit).click();
  }
}
export default new Cadastro();
