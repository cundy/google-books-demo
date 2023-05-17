import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import BookItem from '../BookItem.vue';

describe('BookItem', () => {
    describe('No for sale book without cover image', () => {
        it('renders properly', () => {
            const bookTitle = 'The C++ Programming Language';
            const bookAuthor = 'Bjarne Stroustrup';
            const noCoverImage = "https://bookcart.azurewebsites.net/Upload/Default_image.jpg";
            const book = {
                saleInfo: {
                    saleability: 'NOT_FOR_SALE',
                },
                volumeInfo: {
                    authors: [bookAuthor],
                    title: bookTitle
                }
            };
            const wrapper = mount(BookItem, { props: { book } });
            const bookTitleElement = wrapper.find('.book-title');
            const bookAuthorsElement = wrapper.find('.book-authors');
            const bookBuyLink = wrapper.find('.book-buy-link');
            const bookCover = wrapper.find('.book-cover-image');

            expect(bookTitleElement.text()).toContain(bookTitle);
            expect(bookAuthorsElement.text()).toContain(bookAuthor);
            expect(bookBuyLink.exists()).toBeFalsy();
            expect(bookCover.attributes('src')).toEqual(noCoverImage);
          });
    });
  
});
