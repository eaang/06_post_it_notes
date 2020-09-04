<template>
    <div id="app" class="container mx-auto my-8">
        <div class="text-3xl font-bold">Leave a note for yourself!</div>
        <Counter :notes="notes.length" />
    </div>
</template>

<script>
import Counter from './components/Counter.vue';

export default {
    data: function() {
        return {
            notes: []
        }
    },
    components: {
        Counter,
    }
};
</script>

<style>
/* Adds the background style */
html {
    background: url(assets/background.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
</style>
