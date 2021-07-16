describe('myfirsttest case',()=>{
    it('verify the title of the page positive teast',()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce demo store')
    })
    it('verify the title of the page negative teast',()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce store')
    })

})