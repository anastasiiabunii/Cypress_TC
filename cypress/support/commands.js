// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("scroll_to_top_botom", () => {
    cy.window().scrollTo(0,2000);
    cy.wait(500);
    cy.window().scrollTo(0,4000);
});
Cypress.Commands.add("cookie_and_spam", () =>{
    cy.get('.col-4 > .m-button',{timeout:3000}).should('be.visible').click()
    cy.get('.NostoOverlayClose',{timeout:3000}).should('be.visible').click()
})
