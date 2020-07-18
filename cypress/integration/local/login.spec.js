/// <reference types="cypress" />

function login() {
    cy.get("#email").focus().type("test@mail.com.br")
    cy.get("#password").focus().type("test@mudar")
    cy.get("#submit-login").click()

    cy.get(".toast-message").
        find("div").
        contains("Você foi autenticado !")
}

context("Acoes", () => {
    beforeEach(() => {
        cy.visit("localhost")
        login()
    })

    it("Criar Competência", () => {
        cy.visit("localhost/#/competencia/listar")
        cy.get("h3").contains("Competência / Listar")
        cy.get("a[href='#/competencia/cadastrar']").click()
        cy.wait(2000)
        cy.get("h3").contains("Competência / Cadastrar")

        cy.get(".form-control").focus()
        .type('Nova competencia').should('have.value', 'Nova competencia')

        cy.get(".form-check-input").uncheck().should('not.be.checked')
    })
})
