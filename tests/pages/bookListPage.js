class BookListPage {
	maxBookAmount = 12

	elements = {
		book: 'a[class=book]',
		previousPage: '.bi.bi-chevron-left',
		nextPage: '.bi.bi-chevron-right',
		pagination: 'div[class=pager]',
		sortDropdown: '.form-select',
		searchbox: '[type=text]',
	}

	visitBookListPage() {
		cy.interceptApiRequest('getBooks')
		cy.visit('/')
		cy.checkApiResponse('getBooks')
	}

	checkBookListed() {
		cy.get(this.elements.book).should('be.visible')
	}

	checkBookImageLoaded(amountOfBooks) {
		cy.get(this.elements.book)
			.should('be.visible')
			.and('have.length', amountOfBooks)
			.each($el => {
				cy.wrap($el)
					.should('have.css', 'background-image')
					.and('match', /url\("https:\/\/i\.gr-assets\.com\/.*/)
			})
	}

	checkPageNumber(pageNumber) {
		cy.get(this.elements.pagination).should('contain', `Page ${pageNumber}`)
	}

	goToNextPageCheckApiCallSuccess(pageNumber, resultsAmount) {
		cy.interceptApiRequest(`get${pageNumber}Page`, `?offset=${resultsAmount}*`)
		cy.get(this.elements.nextPage).click()
		cy.checkApiResponse(`get${pageNumber}Page`)
	}

	clickSelectedRandomBook(aliasName) {
		const selectedBookPosition = Math.floor(Math.random() * this.maxBookAmount)

		cy.get(this.elements.book)
			.eq(selectedBookPosition)
			.then(el => {
				cy.wrap(el)
					.invoke('attr', 'href')
					.then(selectedBookHref => {
						cy.interceptApiRequest(aliasName, '', `api/${selectedBookHref}`)
						cy.wrap(el).click()
						cy.url().should(
							'eq',
							`${Cypress.config('baseUrl')}${selectedBookHref}`
						)
					})
			})
	}

	selectOrderByValue(aliasName, valueOption = 'ID') {
		// options: ID, title, author, rating
		cy.interceptApiRequest(aliasName, `*sort=${valueOption.toLowerCase()}*`)
		cy.get(this.elements.sortDropdown).select(valueOption)
		cy.checkApiResponse(aliasName)
	}

	clickOnBookByPosition(position) {
		cy.get(this.elements.book).eq(position).click()
	}

	searchByText(aliasName, searchText) {
		cy.interceptApiRequest(aliasName, `*search=${searchText}*`)
		cy.get(this.elements.searchbox).type(searchText)
		cy.checkApiResponse(aliasName, aliasName)
	}
}

export default BookListPage
