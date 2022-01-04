describe('Criação de subtarefas', () => {
    beforeEach(() => {
        cy.session('name', () => {
            cy.visit(Cypress.env('baseUrlIntegra') + 'login.action?logout=true#')
            cy.get('#login-cafe').click()
            cy.get('#username').type(Cypress.env('emailLogin'))
            cy.get('#password').type(Cypress.env('passwordLogin'))
            cy.get('.btn').click()
            cy.get('#welcome').should('be.visible')
        })
    });

    const data = require('../fixtures/data')
    data.forEach((jira) => {
        it(`Criando subtarefa do platfor-${jira.numeroPlatfor}`, () => {

            cy.visit(Cypress.env('baseUrl') + `browse/PLATFOR-${jira.numeroPlatfor}`)
            cy.get('#opsbar-operations_more').click()
            cy.get('#create-subtask > .trigger-label').click()

            cy.get('#assign-to-me-trigger').click()
            cy.get('#summary').type(`[TESTE] Platfor-${jira.numeroPlatfor}`)
            cy.get('#description').type('Testes não iniciados')
            cy.get('#timetracking_originalestimate').type('1h')
            cy.get('#create-issue-submit').click()
        })
    })
});