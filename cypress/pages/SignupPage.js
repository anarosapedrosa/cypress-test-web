class SignupPage {

    go() {
        cy.visit('/')
        cy.get('body > div > div > div > div.banner > div > h1').should('have.text','conduit')
    }

    goSignUp() {

        cy.visit('/#/register')
        cy.contains("Sign up")

    }

    fillForm(user,fieldIsEmpty) {
        
        if(fieldIsEmpty == "username"){
            //Preenche os inputs
            cy.get('input[ng-model="$ctrl.formData.email"]').type(user.email)
            cy.get('input[ng-model="$ctrl.formData.password"]').type(user.password)
        }
        else if (fieldIsEmpty == "password"){
            //Preenche os inputs
            cy.get('input[ng-model="$ctrl.formData.username"]').type(user.username)
            cy.get('input[ng-model="$ctrl.formData.email"]').type(user.email)
        } else{
            //Preenche os inputs
            cy.get('input[ng-model="$ctrl.formData.username"]').type(user.username)
            cy.get('input[ng-model="$ctrl.formData.email"]').type(user.email)
            cy.get('input[ng-model="$ctrl.formData.password"]').type(user.password)
        }

    }

    fillFormUserExists() {
        //Preenche os inputs
        cy.get('input[ng-model="$ctrl.formData.username"]').type('teste')
        cy.get('input[ng-model="$ctrl.formData.email"]').type('teste@teste.com')
        cy.get('input[ng-model="$ctrl.formData.password"]').type('teste@123')

    }

    submit() {
        cy.get('button').click()
    }

    logout() {
        cy.get('body > div > app-header > nav > div > ul:nth-child(3) > li:nth-child(3) > a').click()
        cy.wait(2000).get('body > div > div > div > div > div > div > button').click()
        cy.wait(2000).get('body > div > div > div > div.banner > div > h1').should('have.text','conduit')
    }

}

export default new SignupPage;