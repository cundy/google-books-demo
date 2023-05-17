<script setup>
import { storeToRefs } from 'pinia';
import { computed } from 'vue';


import { useBooksStore } from '../stores/books';
import SearchForm from '../components/SearchForm.vue';
import LoadingComponent from '../components/LoadingComponent.vue';
import BookList from '../components/BookList.vue';
import ErrorComponent from '../components/ErrorComponent.vue';
import { ref } from 'vue';

const bookStore = useBooksStore();
const {  loading, books, currentPage, pagesCount, booksPerPage, totalOfBooks, error } = storeToRefs(bookStore);

const searchTerm = ref('');

function searchBook(searchValue) {
  bookStore.loadPage(searchValue);
  searchTerm.value = searchValue;
}

function loadPage(pageNumber) {
  bookStore.loadPage(searchTerm.value, pageNumber);
}

const pageRange = computed(() => {
  const from = (currentPage.value - 1) * booksPerPage.value + 1;
  const to = currentPage.value * booksPerPage.value;
  return {from, to};
});

</script>

<template>
  <main class="container">
    <SearchForm @on-search="searchBook" class="search-form"></SearchForm>
    
    <ErrorComponent :message="$t('bookSearchError.message', {page: currentPage})" v-if="error"></ErrorComponent>
    <div class="list-section">
      <LoadingComponent :show="loading" center-horizontal></LoadingComponent>
      <template v-if="!error">
        <BookList :books="books" />
      </template>
      <template v-else>
        
      </template>
    </div>

    <section class="pagination-section" v-if="pagesCount > 1">
      <paginate-component v-model="currentPage" :page-count="pagesCount" :page-range="3" :margin-pages="2" :click-handler="loadPage"
        :prev-text="$t('pagination.previous')" :next-text="$t('pagination.next')" :container-class="'pagination'"
        :page-class="'page-item'">
      </paginate-component>
      <div class="pagination-info">{{ $t('pagination.showing', {from: pageRange.from, to: pageRange.to, total: totalOfBooks})}}</div>
    </section>
  </main>
</template>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";

.container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1560px;
}

.search-form {
  margin-bottom: 2rem;
}

.list-section {
  display: flex;
  flex-grow: 1;
  width: 100%;
  position: relative;
  margin-bottom: 2rem;
}

.pagination-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  margin-bottom: .5rem
}
</style>
