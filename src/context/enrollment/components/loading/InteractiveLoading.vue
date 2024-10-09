<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const phrases = [
  'Loading your experience...',
  'Just a moment, please...',
  "We're almost there...",
  "Hang tight, we're preparing something special...",
  'Thank you for your patience...'
];

const currentPhrase = ref(phrases[0]);
let intervalId: number;

onMounted(() => {
  let index = 0;
  intervalId = setInterval(() => {
    index = (index + 1) % phrases.length;
    currentPhrase.value = phrases[index];
  }, 1500);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="loading-screen">
    <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
    <p>{{ currentPhrase }}</p>
  </div>
</template>

<style scoped>
.loading-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  color: #333;
  font-family: 'Arial', sans-serif;
  animation: fadeIn 1s ease-in-out;
}

.loading-screen p {
  margin-top: 20px;
  font-size: 1.2em;
  font-weight: 500;
  animation: pulse 1.5s infinite;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes pulse {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}
</style>
