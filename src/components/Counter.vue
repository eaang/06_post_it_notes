<template>
    <div id="bar-background" class="relative border-solid border-4 border-green-900">
        <div id="bar-text" class="absolute text-white text-4xl font-bold">{{ notes }} / 10</div>
        <div id="bar-progress" class="bg-green-600 h-10" :style="{ width: (notes * 10) + '%' }"></div>
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
    font-family: 'Nanum Pen Script', Cursive;
}
</style>