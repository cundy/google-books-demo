<script setup>
import { ref } from 'vue';

const emit = defineEmits(['onSearch']);
const searchTerm = ref('');

function search() {
    emit('onSearch', searchTerm.value);
}

function isFormInvalid() {
    return searchTerm.value.trim().length === 0;
}

</script>

<template>
    <form @submit.prevent="search">
        <div>
            <input type="text" v-model="searchTerm" :placeholder="$t('searchForm.searchPlaceholder')" class="search-input"
                required>
            <input type="submit" :value="$t('searchForm.searchText')" class="search-button" :disabled="isFormInvalid()">
        </div>
    </form>
</template>

<style scoped>
.search-button {
    border: 0;
    padding: 10px;
    background: #2c3e50;
    color: white;
    box-shadow: 0 0 0 transparent;
    vertical-align: top;
    cursor: pointer;
}

.search-button:disabled {
    background: rgb(214, 213, 213);
    cursor: not-allowed;
}

.search-input {
    border: 1px solid #eee;
    padding: 9px;
    margin: 0;
    width: 300px;
}
</style>