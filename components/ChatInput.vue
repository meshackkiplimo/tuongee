<template>
    <form @submit.prevent="send" class="flex gap-4">
      <input
        v-model="content"
        type="text"
        placeholder="Type a message..."
        class="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Send
      </button>
    </form>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        content: '',
      };
    },
    methods: {
      send() {
        if (this.content.trim()) {
          this.$emit('send', this.content);
          this.content = '';
        }
      },
    },
  });
  </script>