<template>
    <div class="h-64 flex flex-col">
        <textarea v-model="content" @keyup.enter="addNote" class="flex-1 bg-yellow-300 py-2 px-6 text-gray-900 text-3xl w-full"></textarea>
        <button @click="addNote" class="bg-purple-600 py-3 text-lg font-bold text-white w-full">ADD NEW NOTE</button>
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    data: function () {
        return {
            content: ""
        }
    },
    methods: {
        addNote() {
            eventBus.addNote(this.content);
            this.content = "";
        }
    }
};
</script>

<style scoped>
textarea {
    font-family: "Nanum Pen Script", Cursive;
}
</style>