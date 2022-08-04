class SigninPage {

    goSignIn() {

        cy.visit('/#/login')
        cy.contains("Sign in")

    }

    fillForm(fieldIsEmpty) {
        
        if( fieldIsEmpty == "email" ){

            cy.get('input[ng-model="$ctrl.formData.email"]').type("testeana@teste123.com")

        } else if( fieldIsEmpty == "password" ){

            cy.get('input[ng-model="$ctrl.formData.password"]').type("teste123")

        } else{

            cy.get('input[ng-model="$ctrl.formData.email"]').type("testeana@teste123.com")
            cy.get('input[ng-model="$ctrl.formData.password"]').type("teste@123")

        }

    
    }
    
    submit() {
        cy.get('body > div > div > div > div > div > div > form > fieldset > button').click()
    }

    logout() {
        cy.get('body > div > app-header > nav > div > ul:nth-child(3) > li:nth-child(3) > a').click()
        cy.wait(2000).get('body > div > div > div > div > div > div > button').click()
        cy.wait(2000).get('body > div > div > div > div.banner > div > h1').should('have.text','conduit')
    }

}

export default new SigninPage;