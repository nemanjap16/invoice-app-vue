<script setup>
import { RouterView } from "vue-router";
import { useInvoiceStore } from "./stores/invoice";
import TheNavbar from "./components/TheNavbar.vue";

const invoices = useInvoiceStore();
</script>

<template>
  <header>
    <TheNavbar />
  </header>

  <RouterView />
</template>
