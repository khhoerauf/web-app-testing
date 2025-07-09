class BookDetailsPage {
	constructor() {
		// The highest/lowest rated book based on mock test data
		this.theHighestRatedBook = 4.52;
		this.theLowestRatedBook = 3.59;

		this.elements = {
			book: 'div[class=book]',
		};
	}

	checkDetailsBookPageLoaded(aliasName) {
		cy.checkApiResponse(aliasName);
		cy.get(this.elements.book).should('be.visible').and('have.length', 1);
		cy.get(this.elements.book).find('div').contains('User rating: ');
	}

	checkRatingValue(ratingValue) {
		cy.get(this.elements.book)
			.find('div')
			.last()
			.should('have.text', ` User rating: ${ratingValue} / 5 `);
	}
}

export default BookDetailsPage;
