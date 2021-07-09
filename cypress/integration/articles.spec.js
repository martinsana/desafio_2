/// <reference types="cypress" />

import articles from '../support/pages/articles';

context('Publicações', () => {
  beforeEach(() => {
    cy.backgroundLogin();
    articles.acessarFormularioDeNovaPublicacao();
  });

  it('Realizar uma nova publicação', () => {
    articles.preencherFormulario();
    articles.submeterFormulario();

    articles.validarSeArtigoFoiCriadoComSucesso();
  });
});
