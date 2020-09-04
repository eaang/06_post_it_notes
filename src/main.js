import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    addNote(content) {
      this.$emit('noteWasAdded', content);
    },
    deleteNote(id) {
      this.$emit('noteWasDeleted', id);
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
