class DashboardPage {
    verifyDashboardPageLoaded(){
        return cy.get('#root > div > div.wrapper.d-flex.flex-column.min-vh-100.bg-light > div.header.header-sticky.mb-4 > div > ul > li > nav > ol > li', {timeout: 1000}).should('have.text', 'Dashboard')
    }

    clickAssetsMenu(){
        return cy.get('#root > div > div.sidebar.sidebar-fixed > ul > span:nth-child(2) > li > svg', {timeout: 1000}).click()
    }

    clickWorkOrderMenu(){
        return cy.get('#root > div > div.sidebar.sidebar-fixed > ul > span:nth-child(3) > li > svg').click()
    }

    clickAdministrationMenu(){
        return cy.get('#root > div > div:nth-child(1) > ul > span:nth-child(4) > li > svg').click()
    }

    clickSecurityMenu(){
        return cy.get('#root > div > div:nth-child(1) > ul > span:nth-child(5) > li > svg').click()
    }

    clickProfileMenu(){
        return cy.get('.sidebar-footer > .nav-item', {timeout: 1000}).click()
    }

    clickLogoutButton(){
        return cy.get('.dropdown-item > .flex', {timeout: 1000}).click()
    }

}

export default DashboardPage