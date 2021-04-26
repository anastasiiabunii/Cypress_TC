describe('Trying to get products through bike model', () =>{

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
    
    it('Search for parts throud bike model',() =>{
       
        cy.get('.o-desktop-header__navigation__drawers__item__fmb > .o-desktop-header__navigation__drawers__item__indicator > .drawer-indicator-text').should('be.visible').click()

        cy.xpath('//div[@class="m-select m-select--dark"]//div[@class="m-select__display"]').should('be.visible').click()
        .then(() =>{cy.xpath('//span[text()=" Husqvarna "]').should('be.visible').click()})

        cy.xpath('//div[@class="m-select m-select--dark"]//div[@class="m-select__display"]').should('be.visible').click()
        .then(() =>{
            cy.xpath('//span[text()=" 2017 "]',{timeout:3000}).should('be.visible').click()
        })
        
        cy.xpath('//div[@class="m-select m-select--dark"]//div[@class="m-select__display"]').should('be.visible').click()
        .then(() =>{cy.xpath('//span[text()=" Husqvarna FC 450 2017 "]',{timeout:3000}).should('be.visible').click()})

        cy.wait(1500)

        cy.get('.qa-fmb-model-text').should('be.visible') && cy.get('[customclass="m-button m-button--navigation m-button m-button--xs qa-fmb-view-all-parts"] > .m-button').should('be.visible')
       
     })

    it('Adding a second bike for that parts',() =>{

        cy.xpath('//div[@class="m-select m-select--flash m-select--dark"]//div[@class="m-select__display"]').should('be.visible').click()
        .then(() =>{cy.xpath('//span[text()=" Husqvarna "]').should('be.visible').click()})

        cy.xpath('//div[@class="m-select m-select--flash m-select--dark"]//div[@class="m-select__display"]').should('be.visible').click()
        .then(() =>{
            cy.xpath('//span[text()=" 2017 "]',{timeout:3000}).should('be.visible').click()
        })
        
        cy.xpath('//div[@class="m-select m-select--flash m-select--dark"]//div[@class="m-select__display"]').should('be.visible').click()
        .then(() =>{cy.xpath('//span[text()=" Husqvarna FE 350 2017 "]',{timeout:3000}).should('be.visible').click()})

        cy.wait(1500)
        cy.xpath('//div[@class="m-added-vehicles"]//span[text()=" Husqvarna FE 350 2017 "]').should('be.visible')
        cy.xpath('//div[@class="m-added-vehicles"]//span[text()=" Husqvarna FC 450 2017 "]').should('be.visible')

        cy.get(':nth-child(2) > .m-added-vehicles-buttons > [customclass="m-button m-button--xs m-button--navigation--outline qa-fmb-delete"] > .m-button').click()
        .then(() =>{ cy.xpath('//*[@customclass="m-button m-button--navigation m-button m-button--xs qa-fmb-view-all-parts"]//span[@class="m-button__default"]').click()
        })

    })
    
    it('Check if parts of required motorcycle modes were opened',() =>{

        cy.get('.m-slide-banner__close > .m-button',).click()
        cy.get('h3.ng-star-inserted').should('be.visible')
       
    })



})