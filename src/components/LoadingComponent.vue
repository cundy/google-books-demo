<script setup>
defineProps({
    show: {
        type: Boolean,
        required: true
    },
    centerHorizontal: {
        type: Boolean
    }
});
</script>

<template>
    <div class="loading" :class="{ 'centered-horizontal': centerHorizontal }" v-if="show"></div>
</template>

<style scoped>
.loading {
    position: absolute;
    height: 0;
    width: 0;
    padding: 10px;
    border: 6px solid #ccc;
    border-right-color: #2c3e50;
    border-radius: 20px;
    animation: rotate 1s infinite linear;
}

.centered-horizontal {
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
}

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}
</style>