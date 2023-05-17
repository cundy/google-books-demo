<script setup>
defineProps({
    message: {
        type: String,
        required: true
    }
});
</script>
<template>
    <section class="error-container">
        <font-awesome-icon icon="fa-solid fa-face-frown" class="error-icon" />
        <span class="error-message">{{ message }}</span>
    </section>
</template>

<style scoped>
.error-container {
    display: flex;
    align-items: center;
    --error-color: rgb(184, 20, 20);
}

.error-message {
    margin-left: 1rem;
    color: var(--error-color);
}

.error-icon {
    font-size: 2rem;
    color: var(--error-color);
}
</style>