import signin from '../pages/SigninPage'
import newarticle from '../pages/NewarticlePage'

describe('New Article',()=>{  

    beforeEach(function(){
        signin.goSignIn()
        signin.fillForm("")
        signin.submit()
        cy.wait(2000).get('.article-preview').should("contain.text", "No articles are here... yet.")
    })

    it('Submit new article', function(){
        cy.get('body > div > app-header > nav > div > ul:nth-child(3) > li:nth-child(2) > a').click()
        cy.get('body > div > div > div > div > div > div > form > fieldset > button').should("contain.text","Publish Article")
    })

})