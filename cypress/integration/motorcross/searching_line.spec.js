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
    
    it('Search for parts through the search line',() =>{
       
        cy.get('#search-desktop').should('be.visible').type('Suzuki{enter}')
        let suzukiAmmount = cy.get('.textsize-smaller',{timeout:6000}).invoke('text')
       
        cy.get('#search-desktop').clear().type('KTM{enter}')
        let ktmAmmount=cy.get('.textsize-smaller',{timeout:6000}).invoke('text')

        cy.get('#search-desktop').clear().type('Yamaha{enter}')
        let yamahaAmmount=cy.get('.textsize-smaller',{timeout:6000}).invoke('text')

        cy.log('Suzuki products amount is '+suzukiAmmount)
        cy.log('KTM products amount is '+ktmAmmount)
        cy.log('Yamaha products amount is '+yamahaAmmount)
     })

    it('Count number of products which one page could contain',() =>{
        cy.get('.m-pagination__current-page',{timeout:10000}).should('be.visible')
        cy.get('div[class="row row--tight row--grid qa-pl-items-grid"]').children()
        .then(listing => {
          const listingCount = Cypress.$(listing).length
        cy.log('One page contains maximum '+listingCount+' products')
        });
       

    }) 

})