/// <reference types='cypress'/>
describe('Loacting the Elementes',()=>{
    it('verify the type of locaters',()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.get('input#small-searchterms').type('Apple MacBook Pro 13-inch')
        cy.get('button[type=submit]').click()
        cy.title().should('eq','nopCommerce demo store')
        cy.get('.product-box-add-to-cart-button').click()
        cy.get('input#product_enteredQuantity_4').clear().type('3')
        cy.get('button.add-to-cart-button').click()
        cy.wait(5000)
        cy.get('span.cart-label').click()
        cy.wait(3000)

        cy.get('.product-subtotal').contains('$5,400.00')
    })
})