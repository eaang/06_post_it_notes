<template>
    <div class="grid grid-flow-row grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Note v-for="note in notes" :id="note.id" :key="note.id">
            {{ note.content }}
        </Note>
        <Notebox />
    </div>
</template>

<script>
import Notebox from './Notebox.vue';
import Note from './Note.vue';

export default {
    props: ['notes'],
    components: {
        Notebox,
        Note
    }
};
</script>

<style scoped>
</style>