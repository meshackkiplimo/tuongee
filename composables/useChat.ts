import { ref, onMounted, onUnmounted } from 'vue';
import type { MessagePayload } from '~/types/message';

export function useChat(defaultRoom: string = 'General') {
  const messages = ref<MessagePayload[]>([]);
  const socket: { emit: (event: string, payload: any) => void, on: (event: string, callback: (payload: any) => void) => void, off: (event: string) => void, id?: string } | null = process.client ? useNuxtApp().$socket as { emit: (event: string, payload: any) => void, on: (event: string, callback: (payload: any) => void) => void, off: (event: string) => void, id?: string } : null;

  onMounted(() => {
    if (socket) {
      socket.emit('joinRoom', { room: defaultRoom });

      socket.on('roomMessages', (msgs: MessagePayload[]) => {
        messages.value = msgs;
      });

      socket.on('message', (msg: MessagePayload) => {
        messages.value.push(msg);
      });
    }
  });

  onUnmounted(() => {
    if (socket) {
      socket.off('roomMessages');
      socket.off('message');
    }
  });

  const sendMessage = (content: string) => {
    if (!content.trim() || !socket) return;
    const msg: MessagePayload = {
      room: defaultRoom,
      from: socket.id || 'unknown',
      content,
      timestamp: Date.now(),
    };
    socket.emit('sendMessage', msg);
  };

  return { messages, sendMessage };
}