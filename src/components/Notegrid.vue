<template>
    <div class="grid grid-flow-row grid-cols-4 gap-4">
        <Note v-for="note in notes" :key="note.content">
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