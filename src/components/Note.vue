<template>
    <div class="h-64 flex flex-col">
        <div class="flex-1 main-note bg-yellow-300 py-2 px-6 text-gray-900 text-3xl w-full overflow-auto">
            <slot></slot>
        </div>
        <button @click="deleteNote" class="bg-red-600 py-3 text-lg font-bold text-white w-full">DELETE NOTE</button>
    </div>
</template>

<script>
import { eventBus } from '../main';
export default {
    props: ['id'],
    methods: {
        deleteNote() {
            eventBus.deleteNote(this.id);
        }
    }
};
</script>

<style scoped>
.main-note {
    font-family: 'Nanum Pen Script', Cursive;
}
</style>