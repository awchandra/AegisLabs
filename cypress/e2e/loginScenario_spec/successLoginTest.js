/// <reference types="Cypress" />
import LoginPage from "../pageObjects/LoginPage";
import DashboardPage from "../pageObjects/DashboardPage";

describe('Login with correct credential', function() {
    before(function() {
        cy.fixture('loginData').then(function(data)
        {
            this.data = data
        })
    })
    it('Should be able to login with correct credential', function() {
        const loginPage = new LoginPage
        const dashboardPage = new DashboardPage
        cy.viewport(1280, 720)
        cy.visit('https://cmms.dev.aegislabs.work/#/')
        cy.wait(1000)
        loginPage.verifyLoginPageLoaded()
        loginPage.fillUserName(this.data.correctUsername)
        loginPage.fillPassword(this.data.correctPassword)
        loginPage.clickLoginButton()
        dashboardPage.verifyDashboardPageLoaded()
    })
})