class LoginPage {
    verifyLoginPageLoaded(){
        return cy.get('#root > div > div > div:nth-child(2) > div > div > div > div > p.fs-1.fw-semibold', {timeout: 1000}).should('have.text', 'Login')
    }

    fillUserName(userName) {
        const usernameTextField = cy.get('#root > div > div > div:nth-child(2) > div > div > div > form > div.mb-3 > input')
        usernameTextField.clear()
        usernameTextField.type(userName)
        return this
    }
    
    fillPassword(pswd) {
        const passwordTextField = cy.get('#root > div > div > div:nth-child(2) > div > div > div > form > div.mb-5 > div > input')
        passwordTextField.clear()
        passwordTextField.type(pswd)
        return this
    }

    clickLoginButton(){
        return cy.get('#root > div > div > div:nth-child(2) > div > div > div > form > div.col.text-center.mt-5 > div:nth-child(1) > button').click()
    }

    verifyInvalidUsernameOrPasswordErrorAppear(){
        return cy.get('#root > div > div > div:nth-child(2) > div > div > div > form > div.alert.alert-danger.d-flex.align-items-center > div:nth-child(2) > p').should('contain', 'invalid username / email or password')
    }

}

export default LoginPage