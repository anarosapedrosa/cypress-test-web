class NewarticlePage {


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

}

export default new NewarticlePage;