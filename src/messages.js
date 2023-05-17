export const messages = {
    en: {
        searchForm: {
            searchText: 'Search',
            searchPlaceholder: 'Search ...'
        },
        booksSearch: {
            noAuthors: 'No autors'
        },
        pagination: {
            next: 'Next',
            previous: 'Previous',
            showing: ({named}) => `Showing books ${named('from')} - ${named('to')} of ${named('total')}`
        },
        bookSearchError: {
            message: ({named}) => `Unable to load books from page ${named('page')}`
        }
    },
    fr: {
        searchForm: {
            searchText: 'Recherche',
            searchPlaceholder: 'Recherche ...'
        },
        booksSearch: {
            noAuthors: 'Pas de auteurs'
        },
        pagination: {
            next: 'Suivant',
            previous: 'Précédente',
            showing: ({named}) => `Montrant livres ${named('from')} - ${named('to')} de ${named('total')}`
        },
        bookSearchError: {
            message: ({named}) => `Impossible de charger des livres à partir de la page ${named('page')}`
        }
    }
};