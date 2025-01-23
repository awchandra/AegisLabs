class ChooseActionMenu{
    verifyChooseActionLoaded(){
        return cy.get('#root > div > div.wrapper.d-flex.flex-column.min-vh-100.bg-light > div.body.flex-grow-1.px-3 > div > div > div.flex.bg-white.items-center.px-4.pb-0.rounded.mb-2.sticky.top-\[100px\].z-50 > div > ul > li > div > div.flex.justify-between > p').should('have.text', 'Choose Actions')
    }

    clickNewAssetsButton(){
        return cy.get('#btn-action-Assets-0 > span').click()
    }

}

export default ChooseActionMenu