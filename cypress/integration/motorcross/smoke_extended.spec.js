describe('Extended smoke test', () =>{

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
    
    it('Searching throw most critical elements on the main page',() =>{

        cy.get('.d-inline-block > img').should('be.visible')
        cy.get('#search-desktop').should('be.visible')
        cy.get('.o-desktop-header__navigation__drawers__item__fmb > .o-desktop-header__navigation__drawers__item__indicator > .drawer-indicator-text').should('be.visible')
        cy.get('p-header-minicart > .o-desktop-header__navigation__drawers__item > .o-desktop-header__navigation__drawers__item__indicator > .drawer-indicator-text').should('be.visible')
  
        cy.get(':nth-child(1) > .m-navigation-item__h > a').should('be.visible')
        cy.get(':nth-child(2) > .m-navigation-item__h > a').should('be.visible')
        cy.get(':nth-child(3) > .m-navigation-item__h > a').should('be.visible')
        cy.get(':nth-child(4) > .m-navigation-item__h > a').should('be.visible')
        cy.get(':nth-child(5) > .m-navigation-item__h > a').should('be.visible')
        cy.get('.o-navigation-link__superdeals').should('be.visible')
        cy.get('.o-navigation-link__outlet-badge').should('be.visible')
        
     })

    it('Searching other elements on the main downstairs',() =>{
       
       cy.scroll_to_top_botom()
       cy.get('#newsletterEmailInput').should('be.visible')
       cy.get('.o-footer__contact--small > .row > :nth-child(1) > .a-textlink').should('be.visible')
       cy.get('.o-footer__contact--small > .row > :nth-child(1) > .a-textlink').should('be.visible')

    }) 

})