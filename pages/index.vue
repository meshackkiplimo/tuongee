<template>
    <div class="max-w-3xl mx-auto p-6">
      <h1 class="text-3xl font-bold mb-6 text-gray-800">Chat App</h1>
      <div class="h-96 overflow-y-auto border border-gray-300 p-4 rounded-lg mb-6 bg-gray-50">
        <ChatMessage v-for="msg in messages" :key="msg.timestamp" :message="msg" />
      </div>
      <ChatInput @send="sendMessage" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import ChatMessage from '~/components/ChatMessage.vue';
  import ChatInput from '~/components/ChatInput.vue';
  import { useChat } from '~/composables/useChat';
  
  export default defineComponent({
    components: { ChatMessage, ChatInput },
    setup() {
      const { messages, sendMessage } = useChat('General');
      return { messages, sendMessage };
    },
  });
  </script>