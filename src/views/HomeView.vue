<script setup>
import TheForm from "../components/TheForm.vue";
import TheInvoices from "../components/TheInvoices.vue";
import TheNavbar from "../components/TheNavbar.vue";
import { useInvoiceStore } from "@/stores/invoice";

const store = useInvoiceStore();
</script>

<template>
  <div>
    <header>
      <TheNavbar />
    </header>
    <main>
      <TheInvoices />
    </main>
    <TheForm v-if="store.formOpen" />
  </div>
</template>
