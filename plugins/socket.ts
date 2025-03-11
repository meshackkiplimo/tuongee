import { defineNuxtPlugin } from '#app';
import io from 'socket.io-client';

export default defineNuxtPlugin((nuxtApp) => {
  // Only initialize Socket.io on the client
  if (process.client) {
    const socket = io('http://localhost:3000', {
      withCredentials: true, // Optional: if your backend requires credentials
    });
    nuxtApp.provide('socket', socket);
  }
});