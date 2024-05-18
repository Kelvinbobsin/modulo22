

import { homePage } from "./pages/home.page"
import loginPage from "./pages/login.page"


Cypress.Commands.add('login', (email, senha) => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
    homePage.openMenu('Account')
    loginPage.login(email, senha)
    homePage.openMenu('Account')
});


Cypress.Commands.add('addProducts', (produto, tamanho, cor, quantidade) => {
    cy.visit('produtos')
    cy.get('.post-2622 > .product-block').contains(produto).click()
    cy.get('.button-variable-item-'+ tamanho).click() 
    cy.get('.button-variable-item-'+ cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    
    
  
    
});



