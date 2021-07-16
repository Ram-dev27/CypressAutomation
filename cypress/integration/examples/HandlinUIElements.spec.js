/// <reference types="cypress" />

describe("Testing Suite",()=>{
    it("Testing demoautomation register page",()=>{
        cy.visit("http://demo.automationtesting.in/Register.html")
        cy.url().should('contains','demo')
        cy.url().should('contain','Register')
        cy.title().should('eq','Register')
    })
        //Textarea
    it('Enter address in text area',()=>{
        cy.get(':nth-child(1) > :nth-child(2) > .form-control').should('be.visible').should('be.enabled').type('Ram')
        cy.get(':nth-child(1) > :nth-child(3) > .form-control').should('be.visible').should('be.enabled').type('chandran')
        cy.get('.col-md-8 > .form-control').should('be.visible').should('be.enabled').type('25,thambaram,chennai,tamilnadu')
        cy.get('#eid > .form-control').should('be.visible').should('be.enabled').type('xxxyyyzzz@gmail.com')
        cy.get(":nth-child(4) > .col-md-4 > .form-control").should('be.visible').should('be.enabled').type('1234567890')
    })
        //Radio button
    it('Select gender in radio button',()=>{
        cy.get(':nth-child(1) > .ng-pristine').should('be.visible').should('not.be.checked').click()
        cy.get(".col-md-4 > :nth-child(2) > .ng-pristine").should('be.visible').should('not.be.checked')

    })
        //check box
    it('select hobbies in checkbox ',()=>{
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        cy.get('input[type=checkbox]').check(['Movies','Hockey'])

        //drop down list
    })
    it('Select skills and contries in drop down list',()=>{
        cy.get('#Skills').select('Android').should('have.value','Android')
        cy.get('#countries').select('Angola').should('have.value','Angola')
    })
        //muti select drop down list
    it('select languages in multi select drop down list',()=>{
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Arabic').click()
        cy.get('.ui-corner-all').contains('Filipino').click()
        cy.get('.ui-corner-all').contains('Japanese').click()
        cy.get('.ui-corner-all').contains('Catalan').click()
        cy.get(':nth-child(2) > .ui-icon').click()
        cy.get(':nth-child(3) > .ui-icon').click()
        
        
    })
        //searchable drop down list
    it('select countries in searchable drop down list',()=>{
        cy.get('.select2-selection').click({force: true})
        cy.get('.select2-search__field').type('ind')
        cy.get('.select2-search__field').type('{enter}')
    })
    it('select DOB in the drop down list',()=>{
        cy.get('#yearbox').select('2000').should('have.value','2000')
        cy.get('[placeholder=Month]').select('May').should('have.value','May')
        cy.get('#daybox').select('25').should('have.value','25')
    })
    it('Enter password in password field',()=>{
        cy.get('[ng-model=Password]').type('Cypress@2021')
        cy.get('[ng-model=CPassword]').type('Cypress@2021')
    })
   


})