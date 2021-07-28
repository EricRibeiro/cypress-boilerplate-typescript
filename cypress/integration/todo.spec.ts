// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
	beforeEach(() => {
		cy.visit('https://google.com.br')
	})

	it('displays two todo items by default', () => {
		cy.get("input[title='Search']")
			.should('be.enabled')
			.type("Cypress Best Practices")
			.type("{enter}")

		cy.get('h3')
			.should('be.visible')
	})
})