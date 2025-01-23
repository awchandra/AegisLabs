class AssetsPage{
    verifyAssetsPageLoaded(){
        return cy.get('#root > div > div:nth-child(2) > ul > div.flex.items-center.justify-between.mt-2 > p', {timeout: 1000}).should('have.text', 'Assets')
    }

    clickAssetsMenu(){
        return cy.get('#root > div > div:nth-child(2) > ul > div:nth-child(2) > a:nth-child(1) > p', {timeout: 1000}).click()
    }

    clickLocationMenu(){
        return cy.get('#root > div > div:nth-child(2) > ul > div:nth-child(2) > a:nth-child(2) > p', {timeout: 1000}).click()
    }

    clickChooseActionButton(){
        return cy.get('#root > div > div.wrapper.d-flex.flex-column.min-vh-100.bg-light > div.body.flex-grow-1.px-3 > div > div > div.flex.bg-white.items-center.px-4.pb-0.rounded.mb-2.sticky.top-\[100px\].z-50 > div > button > div > span').click()
    }

}

export default AssetsPage