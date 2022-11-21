<script setup>
import TheInvoices from "../components/TheInvoices.vue";
import TheNavbar from "../components/TheNavbar.vue";
</script>

<template>
  <div class="flex h-screen">
    <header>
      <TheNavbar />
    </header>
    <main class="flex-1">
      <TheInvoices />
    </main>
  </div>
</template>
