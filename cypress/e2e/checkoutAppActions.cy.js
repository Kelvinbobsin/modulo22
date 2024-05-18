/// <reference types = "cypress" />

const dadosprodutos = require('../fixtures/dados.json')
const produtos = require('../support/pages/checkout.page')






context('Checkout', () => {
   
    it('Eu visito a página de produtos da loja Ebac', () => {
        cy.visit('produtos')
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2)').should('contain', 'Produtos')
    });
    

    it.only('adicionar um produto ao carrinho e finalizar a compra', () => {
        
        cy.addProducts('Ajax Full-Zip Sweatshirt', 'M', 'Blue', '2')
        
        produtos.preencherCheckout(
            dadosprodutos[0].nome,
            dadosprodutos[0].sobrenome, 
            dadosprodutos[0].empresa, 
            dadosprodutos[0].pais, 
            dadosprodutos[0].endereco, 
            dadosprodutos[0].complemento, 
            dadosprodutos[0].cidade, 
            dadosprodutos[0].estado, 
            dadosprodutos[0].cep, 
            dadosprodutos[0].telefone, 
            dadosprodutos[0].email

        )
    });


});



