describe('Comparing amount of stuff through a search line', () =>{

    before(() => {
        cy.visit(Cypress.config('baseUrl'))
    })

    it('Checking domain',() =>{
        cy.log(Cypress.env)
        cy.url().should('contain','https://www.24mx.')
        
    })

    it('Dealing with coookies and spam frames',() =>{ 
        cy.cookie_and_spam()
    })
    
    it('Purchasing some product to the basket',() =>{
       
        cy.get(':nth-child(1) > .m-navigation-item__h > a').should('be.visible').click()
        .then(() =>{cy.get(':nth-child(1) > a > .m-navigation-sub-item__cat-name').should('be.visible').click()})

        cy.get(':nth-child(42) > p-productcard > .o-product-card__blocklink > .o-product-card > .o-product-card__container > .m-product-card-info > .m-product-card-info__container > .m-product-card-info__title > span').should('be.visible').click()

        cy.get(':nth-child(1) > :nth-child(1) > p-select.ng-star-inserted > .m-select > .m-select__display',{timeot:3000}).should('be.visible').click()
        .then(() =>{cy.get(':nth-child(1) > :nth-child(1) > p-select.ng-star-inserted > .m-select > .m-select__container > .m-select__items-wrapper > ul > :nth-child(1) > p-select-product-variation.ng-star-inserted > .a-product-variation').should('be.visible').click({force:true})})
        cy.get(':nth-child(2) > :nth-child(1) > p-select.ng-star-inserted > .m-select > .m-select__display').click()
        .then(() =>{cy.get('.m-select__items-wrapper > ul > :nth-child(3)').should('be.visible').click()})
       
        cy.get(':nth-child(2) > :nth-child(1) > p-button.ng-star-inserted > .m-button').click()
        .then(() =>{cy.get('.o-cart-process__added > p',{timeot:10000})}).should('be.visible')
        cy.wait(5000)
        cy.get('.o-cart-process__added > .a-textlink').click()
        cy.wait(3000)
        
     })

    it('Confirming purchased product',() =>{
        
        cy.get('p-product-line-items > :nth-child(1) > .m-checkout-list__items').find('li').should('have.length', 1)

        cy.get('#checkout-email').should('be.visible').type(Cypress.config('email'))
        cy.get('#checkout-mobileNumber').type(Cypress.config('telnumber'))
        cy.get('#checkout-firstName').should('be.visible').type(Cypress.config('name'))
        cy.get('#checkout-surname').should('be.visible').type(Cypress.config('surname'))
        cy.get('#checkout-streetAndHouseNumber').should('be.visible').type(Cypress.config('street'))
        cy.get('#checkout-postCode').should('be.visible').type(Cypress.config('postnumber'))
        cy.get('#checkout-city').should('be.visible').type(Cypress.config('city'))

        cy.get('.m-slide-banner__close > .m-button').click()
        cy.get('.m-checkout-finalize > p-button > .m-button').should('be.visible').click()

    })
    
    
})