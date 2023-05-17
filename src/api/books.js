import axios from "axios";

const booksBaseUrl = 'https://www.googleapis.com/books/v1/volumes';

export async function getBooks({ searchTerm, page, booksPerPage }) {
    return axios.get(`${booksBaseUrl}?q=intitle:${searchTerm}&maxResults=${booksPerPage}&startIndex=${page - 1}`);
}