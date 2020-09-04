<template>
    <div id="app" class="container mx-auto my-8">
        <div class="flex mx-auto space-x-8 my-8">
            <Counter class="flex-1" :notes="notes.length" />
        </div>
        <Notegrid :notes="notes" />
    </div>
</template>

<script>
import { eventBus } from './main';
import Counter from './components/Counter.vue';
import Notegrid from './components/Notegrid.vue';

export default {
    data: function() {
        return {
            notes: [
                {content: 'Put away the laundry'},
                {content: 'Take your medication'},
                {content: 'Go to sleep before 3am'},
                {content: 'Restock instant noodles'}
            ]
        }
    },
    components: {
        Counter,
        Notegrid
    },
    created() {
        eventBus.$on('noteWasAdded', (content) => {
            if (this.notes.length == 10) {
                alert("The board is full! Try deleting some notes first.")
            } else {
                this.notes.push({content: content});
            }
        })
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
