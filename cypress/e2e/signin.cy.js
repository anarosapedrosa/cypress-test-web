import signin from '../pages/SigninPage'
describe('signIn',()=>{  

    beforeEach(function(){
        signin.goSignIn()
    })

    it('Login User',function(){

        signin.fillForm("")
        signin.submit()
        cy.wait(2000).get('.article-preview').should("contain.text", "No articles are here... yet.")
        signin.logout()

    })

    context('When required fields are empty ', function(){

        it('Shouldnt sign in when email is empty', function(){
            signin.fillForm("password")
            signin.submit()
            cy.wait(2000).get('body > div > div > div > div > div > div > list-errors > ul > div > li').should("contain.text","email can't be blank")
        })

        it('Shouldnt sign in when password is empty', function(){
            signin.fillForm("email")
            signin.submit()
            cy.get('body > div > div > div > div > div > div > list-errors > ul > div > li').should("contain.text","password can't be blank")
        })

    })

    after(function(){
        cy.get('body > div > app-header > nav > div > ul:nth-child(2) > li:nth-child(1) > a').click()
    })

})
