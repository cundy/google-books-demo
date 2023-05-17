import { defineStore } from 'pinia';
import { getBooks } from '../api/books';

export const useBooksStore = defineStore('books', {
    state: () => ({ books: [], loading: false, booksPerPage: 10, totalOfBooks: 0, currentPage: 1, error: null }),
    getters: {
        pagesCount: state => {
            const { totalOfBooks, booksPerPage } = state;
            const quotient = Math.floor(totalOfBooks / booksPerPage);
            const reminder = totalOfBooks % booksPerPage;

            return reminder === 0 ? quotient : quotient + 1;
        }
    },
    actions: {
        async loadPage(searchTerm, pageNumber = 1) {
            this.loading = true;
            this.currentPage = pageNumber;
            this.searchTerm = searchTerm;
            this.error = null;

            try {
                const response = await getBooks({ searchTerm: this.searchTerm, booksPerPage: this.booksPerPage, page: pageNumber });
                const { data: { items, totalItems } } = response;
                this.totalOfBooks = totalItems;
                this.books = items;
            } catch (error) {
                this.books = [];
                this.error = error;
            } finally {
                this.loading = false;
            }
        }
    }
});