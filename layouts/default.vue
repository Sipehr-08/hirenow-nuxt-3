<template>
  <div class="flex flex-col h-full">
    <Header />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts"></script>
