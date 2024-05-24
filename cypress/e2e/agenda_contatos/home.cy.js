/// <reference types="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar 3 contatos', () => {
        cy.get('.contato').should('have.length', 3)
    })

    it('Deve incluir um contato', () => {
        cy.get('input[type="text"]').type('Jack Hussel')
        cy.get('input[type="email"]').type('jack.hussel@email.com')
        cy.get('input[type="tel"]').type('(31) 98765-4321')
        cy.get('.adicionar').click()
        cy.get('.contato').should('have.length', 4)
        cy.screenshot('tela-inclusao')
    })

    it('Deve alterar um contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="email"]').click()
        cy.get('input[type="email"]').type('{backspace}')
        cy.get('input[type="email"]').type('{backspace}')
        cy.get('input[type="email"]').type('{backspace}')
        cy.get('.alterar').click()
        cy.get('.sc-eDDNvR li').contains('gian@ebac.com')
        cy.screenshot('tela-alteracao')
    })

    it('Deve excluir um contato', () => {
        cy.get('.delete').last().click()
        cy.get('.contato').should('have.length', 3)
        cy.screenshot('tela-exclusao')
    })
})