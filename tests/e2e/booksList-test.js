import BookListPage from '../pages/bookListPage'
import BookDetailsPage from '../pages/bookDetailsPage'

describe('general functionality list of books', () => {
	it.skip('user is able to sort by rating', () => {
		const listPage = new BookListPage()
		const detailsPage = new BookDetailsPage()

		listPage.visitBookListPage()
		listPage.selectOrderByValue('getOrderBy', 'rating')

		// Bug #2 sort the records in descending order
		listPage.clickOnBookByPosition(0)
		detailsPage.checkRatingValue(detailsPage.theHighestRatedBook)
	})

	it.skip('user can search by existing author', () => {
		const listPage = new BookListPage()
		const existingAuthorName = 'Christopher'

		listPage.visitBookListPage()

		listPage.searchByText('getBooksByAuthor', existingAuthorName)
		listPage.checkBookListed()
	})

	it('list of books are loaded with cover images', () => {
		const page = new BookListPage()
		page.visitBookListPage()

		page.checkBookImageLoaded(page.maxBookAmount)
		page.checkPageNumber(1)
	})

	it('user can navigate between pages', () => {
		const page = new BookListPage()
		page.visitBookListPage()

		page.goToNextPageCheckApiCallSuccess(2, 24)
		// Bug/Improvement - Not all books have cover image
		//page.checkBookImageLoaded(page.maxBookAmount)
		page.goToNextPageCheckApiCallSuccess(2, 36)
		page.checkBookImageLoaded(page.maxBookAmount)
		page.goToNextPageCheckApiCallSuccess(2, 48)
		page.checkBookImageLoaded(page.maxBookAmount)
	})

	it('user can navigate to book details page', () => {
		const listPage = new BookListPage()
		const detailsPage = new BookDetailsPage()

		listPage.visitBookListPage()
		listPage.clickSelectedRandomBook('getBookDetails')
		detailsPage.checkDetailsBookPageLoaded('getBookDetails')
	})
})
