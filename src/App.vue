<template>
    <div id="app" class="container mx-auto my-8 px-4">
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
                {id: 1, content: 'Put away the laundry'},
                {id: 2, content: 'Take your medication'},
                {id: 3, content: 'Go to sleep before 3am'},
                {id: 4, content: 'Restock instant noodles'}
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
                const newNote = {id: (this.notes.length + 1), content: content};
                this.notes.push(newNote);
            }
        }),
        eventBus.$on('noteWasDeleted', (id) => {
            const newNotes = this.notes.filter(note => note.id != id);
            this.notes = newNotes;
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
