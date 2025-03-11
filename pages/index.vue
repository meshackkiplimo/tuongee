<template>
    <div class="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 flex flex-col justify-center items-center p-6">
      <!-- Hero Section -->
      <header class="text-center mb-16 max-w-4xl">
        <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Chat <span class="text-blue-600">Smarter</span>, Connect <span class="text-blue-600">Faster</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          ChatApp brings your conversations to life with real-time messaging, community spaces, and private connections—all in one beautiful interface.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink
            to="/chat"
            class="px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transform transition-all duration-300 hover:scale-105 shadow-md"
          >
            Start Chatting Now
          </NuxtLink>
          <a 
            href="#features" 
            class="px-8 py-3 bg-white text-blue-600 text-lg font-medium rounded-lg hover:bg-gray-50 border border-blue-200 transform transition-all duration-300 hover:scale-105 shadow-md"
          >
            See Features
          </a>
        </div>
      </header>
      
      <!-- Features Section -->
      <main id="features" class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        <div class="bg-white p-8 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-xl">
          <div class="text-blue-500 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <h2 class="text-2xl font-semibold text-gray-800">Real-Time Messaging</h2>
          </div>
          <p class="text-gray-600 mb-4">Exchange messages instantly with zero delay. Enjoy typing indicators, read receipts, and seamless media sharing.</p>
          <ul class="text-gray-600">
            <li class="mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Instant delivery
            </li>
            <li class="mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Typing indicators
            </li>
          </ul>
        </div>
        
        <div class="bg-white p-8 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-xl">
          <div class="text-blue-500 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h2 class="text-2xl font-semibold text-gray-800">Public Rooms</h2>
          </div>
          <p class="text-gray-600 mb-4">Join vibrant communities organized by interests, hobbies, or topics. Make new connections effortlessly.</p>
          <ul class="text-gray-600">
            <li class="mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Topic-based rooms
            </li>
            <li class="mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Community moderation
            </li>
          </ul>
        </div>
        
        <div class="bg-white p-8 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-xl">
          <div class="text-blue-500 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h2 class="text-2xl font-semibold text-gray-800">Private Chats</h2>
          </div>
          <p class="text-gray-600 mb-4">Enjoy secure one-on-one conversations with end-to-end encryption. Your privacy is our priority.</p>
          <ul class="text-gray-600">
            <li class="mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              End-to-end encryption
            </li>
            <li class="mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Message expiration
            </li>
          </ul>
        </div>
      </main>
      
      <!-- Testimonials Section -->
      <section class="mt-16 max-w-4xl w-full">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-8">What People Are Saying</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
              <div class="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">JD</div>
              <div class="ml-4">
                <p class="font-semibold text-gray-800">Jane Doe</p>
                <p class="text-gray-500 text-sm">Designer</p>
              </div>
            </div>
            <p class="text-gray-600">"ChatApp completely transformed how our design team collaborates. The interface is beautiful and the real-time features are flawless."</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
              <div class="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">JS</div>
              <div class="ml-4">
                <p class="font-semibold text-gray-800">John Smith</p>
                <p class="text-gray-500 text-sm">Developer</p>
              </div>
            </div>
            <p class="text-gray-600">"I've tried dozens of messaging apps, but ChatApp's simplicity and speed are unmatched. It just works, every time."</p>
          </div>
        </div>
      </section>
      
      <!-- Stats Section -->
      <section class="mt-16 w-full max-w-4xl bg-blue-600 text-white rounded-xl shadow-lg p-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p class="text-4xl font-bold mb-2">1M+</p>
            <p class="text-blue-100">Active Users</p>
          </div>
          <div>
            <p class="text-4xl font-bold mb-2">10K+</p>
            <p class="text-blue-100">Public Rooms</p>
          </div>
          <div>
            <p class="text-4xl font-bold mb-2">99.9%</p>
            <p class="text-blue-100">Uptime</p>
          </div>
        </div>
      </section>
      
      <!-- CTA Section -->
      <footer class="mt-16 text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Ready to Connect?</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Join thousands of people who trust ChatApp for their messaging needs.
        </p>
        <NuxtLink
          to="/chat"
          class="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transform transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Start Chatting Now
        </NuxtLink>
        <p class="mt-8 text-gray-500 text-sm">
          © 2025 ChatApp. All rights reserved.
        </p>
      </footer>
    </div>
  </template>
  
  <script setup lang="ts">
  // No logic needed for the landing page
  </script>