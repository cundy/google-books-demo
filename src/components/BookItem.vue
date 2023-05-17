<script setup>
import { computed } from 'vue';

const props = defineProps({
    book: {
        type: Object,
        required: true
    }
});

const volumeInfo = computed(() => props.book?.volumeInfo);
const authors = computed(() => volumeInfo.value?.authors);
const hasAuthors = computed(() => authors.value?.length);
const saleInfo = computed(() => props.book?.saleInfo);
const isForSale = computed(() => saleInfo.value?.saleability !== 'NOT_FOR_SALE');

</script>

<template>
    <div class="book-item">
        <section class="book-cover">
            <a :href="volumeInfo.previewLink" target="_blank">
                <template v-if="volumeInfo.imageLinks">
                    <img :src="volumeInfo.imageLinks.smallThumbnail" :alt="volumeInfo.title" class="book-cover-image">
                </template>
                <template v-else>
                    <img src="https://bookcart.azurewebsites.net/Upload/Default_image.jpg" :alt="volumeInfo.title"
                        class="book-cover-image">
                </template>
            </a>
        </section>
        <section class="book-details">
            <h4 class="book-title">{{ volumeInfo.title }}</h4>
            <div class="book-authors">
                <span v-if="!hasAuthors">{{ $t('booksSearch.noAuthors') }}</span>
                <span v-else>
                    {{ authors.join(', ') }}
                </span>
            </div>

            <a v-if="isForSale" :href="saleInfo.buyLink" target="_blank" class="book-buy-link">
                <section class="book-sale">
                    <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                    <span class="book-buy-info">{{ saleInfo.listPrice?.amount }}&nbsp;{{ saleInfo.listPrice?.currencyCode
                    }}</span>
                </section>
            </a>
        </section>
    </div>
</template>

<style scoped>
.book-item {
    display: flex;
    border: 1px solid var(--border-color);
    padding: 0.625rem;
    border-radius: 0.5rem;
    --border-color: #eeeeee;
}

.book-cover {
    margin-right: 1rem;
}

.book-cover .book-cover-image {
    width: 96px;
    height: 124px
}

.book-title {
    font-weight: 400;
    font-size: 1rem;
    color: rgb(26, 13, 171);
    line-height: 1.25rem;
}

.book-authors {
    font-size: .75rem;
    line-height: 1rem;
    margin-top: .75rem;
}

.book-sale {
    margin-top: 1rem;
    border: 1px solid var(--border-color);
    display: inline-block;
    padding: 0 .625rem;
    border-radius: 1rem;
}

.book-buy-link {
    text-decoration: none;
}

.book-buy-info {
    margin-left: .5rem;
}
</style>