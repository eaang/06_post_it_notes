<template>
    <div id="bar-background" class="relative w-100 bg-gray-500 h-8 rounded-md">
        <div id="bar-text" class="absolute text-center text-white font-bold">{{ notes }} / 10</div>
        <div id="bar-progress" class="bg-green-600 h-8 rounded-md" :style="{ width: (notes * 10) + '%' }"></div>
    </div>
</template>

<script>
export default {
    props: ["notes"],
};
</script>

<style scoped>
/* Centers Text */
#bar-text {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>