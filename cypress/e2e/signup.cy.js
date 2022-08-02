import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('signUp',()=>{  

    beforeEach(function(){
        signup.goSignUp()
    })

    it('Should register a user',function(){

        var user = signupFactory.user();
        signup.fillForm(user,"")
        signup.submit()
        cy.wait(2000).get('.article-preview').should("contain.text", "No articles are here... yet.")
        signup.logout()

    })

    context('When I dont fill in all the required fields ', function(){

        it('Shouldnt register a user when all fields are empty', function(){
            signup.submit()
            cy.get('body > div > div > div > div > div > div > list-errors > ul > div > li').should("contain.text","email can't be blank")
        })

        it('Shouldnt register a user when username is empty', function(){
            var user = signupFactory.user()
            signup.fillForm(user,"username")
            signup.submit()
            cy.get('body > div > div > div > div > div > div > list-errors > ul > div > li').should("contain.text","username can't be blank")
        })

        it('Shouldnt register a user when password is empty', function(){
            var user = signupFactory.user()
            signup.fillForm(user,"password")
            signup.submit()
            cy.get('body > div > div > div > div > div > div > list-errors > ul > div > li').should("contain.text","password can't be blank")
        })
    })

    context('When the user exists', function(){
        
        it('Must not register duplicate user', function(){

            signup.fillFormUserExists()
            signup.submit()
            cy.get('body > div > div > div > div > div > div > list-errors > ul > div:nth-child(1) > li').should("contain.text","email has already been taken")
            cy.get('body > div > div > div > div > div > div > list-errors > ul > div:nth-child(2) > li').should("contain.text","username has already been taken")
        })

    })

    after(function(){
        cy.get('body > div > app-header > nav > div > ul:nth-child(2) > li:nth-child(1) > a').click()
    })
})
