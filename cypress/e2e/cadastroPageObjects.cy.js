/// <reference types = "cypress" />



import { faker } from '@faker-js/faker';
const CreateAccountPage = require('../support/pages/createAccount.page')



context('Given - Dado que visito a Loja EBAC na página minha-conta', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('When - Quando me cadastro com e-mail e senha ', () => {
        let email = faker.internet.email()
        let pass = faker.internet.password()
      
        CreateAccountPage.register(email, pass)
       
    });

    it('Then - Então deve aparecer cadastrado com sucesso', () => {
        
        cy.location('pathname').should('be.equal', '/minha-conta/')
        cy.contains('h1', 'Minha conta').should('be.visible')
    });


});