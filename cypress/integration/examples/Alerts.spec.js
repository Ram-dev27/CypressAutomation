/// <reference types='cypress' />

describe('suite Name',()=>{
    it('Alerts',()=>{
//     cy.visit('https://mypage.rediff.com/login/dologin')
//     cy.get('#pass_div > [type="submit"]').click()
//     cy.on('window:alert',(str)=>{
//         expect(str).to.equal('Please enter valid email')
//     })

//     })
cy.visit('http://testautomationpractice.blogspot.com/')
cy.get('#HTML9 > div.widget-content > button').click()
cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Press a button!')
        })
})
})