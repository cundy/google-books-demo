<script setup>
import BookItem from './BookItem.vue';

defineProps({
    books: {
        type: Array,
        required: true
    }
});
</script>

<template>
    <div class="book-list">
        <BookItem v-for="book in books" :book="book" :key="book.id"></BookItem>
    </div>
</template>

<style scoped>
.book-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 1rem;
    flex-grow: 1;
}
</style>