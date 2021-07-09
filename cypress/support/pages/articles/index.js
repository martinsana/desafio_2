/// <reference types="cypress" />
const faker = require('faker');
const el = require('./elements').ELEMENTS;

import Routes from '../../routes';

class Articles {
  acessarFormularioDeNovaPublicacao() {
    cy.get(el.acessarEditor).click();
  }

  preencherFormulario() {
    cy.get(el.inputTitle).type('Article Title');
    cy.get(el.inputDescription).type('Article description');
    cy.get(el.textAreaContent).type(faker.lorem.paragraph());
    cy.get(el.inputTag).type('#cypress');
  }

  submeterFormulario() {
    cy.get(el.primaryButtonSubmit).click();
  }

  validarSeArtigoFoiCriadoComSucesso() {
    cy.wait(`@${Routes.as.postArticles}`).then(postArticlesResponse => {
      expect(postArticlesResponse.status).to.eq(200);
    });

    cy.wait(`@${Routes.as.getArticlesTitle}`).then(getArticlesResponse => {
      expect(getArticlesResponse.status).to.eq(200);
    });

    cy.wait(`@${Routes.as.getArticlesTitleComments}`).then(
      getArticlesCommentsResponse => {
        expect(getArticlesCommentsResponse.status).to.eq(200);
      }
    );
  }
}

export default new Articles();
