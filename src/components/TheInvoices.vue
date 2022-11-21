<template>
  <div class="mt-[72px] flex flex-col items-center">
    <div class="mb-[65px] flex w-[730px] items-baseline justify-between">
      <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-semibold text-title-color dark:text-white">
          Invoices
        </h1>
        <p class="text-muted-color dark:text-muted-color-dark">
          There are {{ store.invoices.length }} invoices
        </p>
      </div>
      <div class="flex items-center gap-16">
        <button class="flex items-center gap-4" aria-label="Filter invoices">
          <p class="font-semibold text-title-color dark:text-white">
            Filter by status
          </p>
          <IconArrowDown />
        </button>
        <button
          class="flex items-center gap-2 rounded-[60px] bg-purple-light p-2 text-white"
        >
          <div
            class="grid h-[32px] w-[32px] place-content-center rounded-full bg-white"
          >
            <IconPlus class="ml-[1px]" />
          </div>
          <span class="mr-2 font-semibold">New Invoice</span>
        </button>
      </div>
    </div>
    <div v-for="invoice in store.invoices">
      <InvoiceData :invoice="invoice" :key="invoice.id" />
    </div>
  </div>
</template>

<script setup>
import { useInvoiceStore } from "../stores/invoice";
import IconArrowDown from "./icons/IconArrowDown.vue";
import IconPlus from "./icons/IconPlus.vue";
import InvoiceData from "./InvoiceData.vue";

const store = useInvoiceStore();
</script>
