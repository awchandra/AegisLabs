/// <reference types="Cypress" />
import LoginPage from "../pageObjects/LoginPage";

describe('Login with incorrect credential', function() {
    before(function() {
        cy.fixture('loginData').then(function(data)
        {
            this.data = data
        })
    })
    it('Should not be able to login with incorrect credential', function() {
        const loginPage = new LoginPage
        cy.viewport(1280, 720)
        cy.visit('https://cmms.dev.aegislabs.work/#/')
        cy.wait(1000)
        loginPage.verifyLoginPageLoaded()
        loginPage.fillUserName(this.data.incorrectUsername)
        loginPage.fillPassword(this.data.incorrectPassword)
        loginPage.clickLoginButton()
        loginPage.verifyInvalidUsernameOrPasswordErrorAppear()
    })
})