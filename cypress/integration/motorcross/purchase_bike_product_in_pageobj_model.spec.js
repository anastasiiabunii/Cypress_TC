import motorcyclePOMs from '../motorcross/POM'

describe('Comparing amount of stuff through a search line', () =>{

    const motoObj = new motorcyclePOMs()
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
       
        motoObj.motorgear().should('be.visible').click()
        .then(() =>{motoObj.moto_clothes().should('be.visible').click()})

        motoObj.my_clothes().should('be.visible').click()

        motoObj.choose_size1().should('be.visible').click()
        .then(() =>{motoObj.my_size1().should('be.visible').click({force:true})})
        motoObj.click.click()
        .then(() =>{motoObj.my_size2().should('be.visible').click()})
       
        motoObj.add_to_basket().click()
        .then(() =>{motoObj.buy_request_processed()}).should('be.visible')
        cy.wait(5000)
        motoObj.go_tobasket().click()
        cy.wait(3000)
        
     })

    it('Confirming purchased product',() =>{
        
        motoObj.productinbasket().find('li').should('have.length', 1)

        motoObj.email().should('be.visible').type(Cypress.config('email'))
        motoObj.mobilenumber().type(Cypress.config('telnumber'))
        motoObj.name().should('be.visible').type(Cypress.config('name'))
        motoObj.surname().should('be.visible').type(Cypress.config('surname'))
        motoObj.str_house().should('be.visible').type(Cypress.config('street'))
        motoObj.postcode().should('be.visible').type(Cypress.config('postnumber'))
        motoObj.city().should('be.visible').type(Cypress.config('city'))
        
        motoObj.botomspam().click()
        motoObj.conf_buy().should('be.visible').click()

    })
    
    
})