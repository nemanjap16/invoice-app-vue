<script setup>
import { RouterView } from "vue-router";
import TheForm from "./components/TheForm.vue";
import { useInvoiceStore } from "./stores/invoice";
const store = useInvoiceStore();
store.getInvoices();
</script>

<template>
  <div>
    <TheForm />
    <RouterView />
  </div>
</template>
