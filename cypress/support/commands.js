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

Cypress.Commands.add('login', (email,pass) => {
    cy.visit("/");
    cy.get('input[placeholder="Email"]').clear().type(email);
    cy.get('input[placeholder="Password"]').clear().type(pass);        
    cy.get(':nth-child(7) > .MuiButtonBase-root').click();
    cy.url().should("include", `/movies`)
});

Cypress.Commands.add('imageDetailsCheck', (list) => {
    cy.get('.MuiImageList-root')
    .within(() => {
      cy.get("li").each(($card, index) => {
        cy.log(list[index].file_path)
        cy.wrap($card).get("img").eq(index).should("have.attr", "src").should("include", list[index].file_path);
      });
    });
});

Cypress.Commands.add('navFavoriteTv', (query) => {
    cy.get("button[aria-label='add to favorites']").eq(1).click();
    cy.get("button[aria-label='add to favorites']").eq(2).click();
    cy.get("button").contains("Favorite TV").click(); 
});