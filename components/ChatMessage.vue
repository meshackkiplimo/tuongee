<template>
  <div class="mb-4">
    <span class="font-semibold text-gray-900">{{ message.from }}:</span>
    <span class="ml-2 text-gray-700">{{ message.content }}</span>
    <span class="text-sm text-gray-500 ml-2">{{ formatTime(message.timestamp) }}</span>
  </div>
</template>

<script setup lang="ts">
import type { MessagePayload } from '~/types/message';

// Define props with TypeScript
defineProps<{
  message: MessagePayload;
}>();

// Define the formatTime method
const formatTime = (timestamp: number) => {
  return new Date(timestamp).toLocaleTimeString();
};
</script>