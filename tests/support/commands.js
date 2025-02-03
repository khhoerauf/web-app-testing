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

Cypress.Commands.add(
	'interceptApiRequest',
	(aliasName, parameters = '*', endpoint = 'api/books') => {
		return cy.intercept(`${endpoint}${parameters}`).as(aliasName)
	}
)

Cypress.Commands.add('checkApiResponse', aliasName => {
	cy.wait(`@${aliasName}`).then(res => {
		// Check if the response is successful, preferably with the status code
		expect(res.response).to.not.be.null
	})
})
