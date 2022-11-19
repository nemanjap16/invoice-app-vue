<script setup>
import { RouterView } from "vue-router";
import { useInvoiceStore } from "./stores/invoice";

const invoices = useInvoiceStore();
</script>

<template>


  <RouterView />
</template>
