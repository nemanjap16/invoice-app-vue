<template>
  <div class="mt-[104px] flex flex-col items-center md:mt-[72px]">
    <div
      class="mb-[65px] flex w-[330px] items-baseline justify-between md:w-[550px] lg:w-[730px]"
    >
      <div class="flex flex-col gap-2">
        <h1
          class="text-2xl font-semibold text-title-color dark:text-white lg:text-3xl"
        >
          Invoices
        </h1>
        <!-- desktop -->
        <p class="hidden text-muted-color dark:text-muted-color-dark md:block">
          There are {{ store.invoices.length }} invoices
        </p>
        <!-- mobile -->
        <p class="text-muted-color dark:text-muted-color-dark md:hidden">
          {{ store.invoices.length }} invoices
        </p>
      </div>
      <div class="flex items-center gap-4 md:gap-16">
        <button
          class="flex items-center gap-2 md:gap-4"
          aria-label="Filter invoices"
          @click="filter"
        >
          <p
            class="hidden font-semibold text-title-color dark:text-white md:block"
          >
            Filter by status
          </p>
          <p class="font-semibold text-title-color dark:text-white md:hidden">
            Filter
          </p>
          <IconArrowDown ref="arrow" />
        </button>
        <button
          class="flex items-center gap-2 rounded-[60px] bg-purple-light p-2 text-white"
        >
          <div
            class="grid h-[32px] w-[32px] place-content-center rounded-full bg-white"
          >
            <IconPlus class="ml-[1px]" />
          </div>
          <span class="mr-2 hidden font-semibold md:block">New Invoice</span>
          <span class="mr-2 font-semibold md:hidden">New</span>
        </button>
      </div>
    </div>
    <div v-for="invoice in store.invoices" v-if="store.invoices.length > 0">
      <InvoiceData :invoice="invoice" :key="invoice.id" />
    </div>
    <div
      class="calc-height flex w-full flex-col items-center justify-center"
      v-if="store.invoices.length == 0"
    >
      <IconEmpty class="mx-auto" />
      <h2
        class="mb-6 mt-12 text-2xl font-bold text-title-color dark:text-white"
      >
        There is nothing here
      </h2>
      <p class="text-moon-color dark:text-white">
        Create a new invoice by clicking the
      </p>
      <p class="text-moon-color dark:text-white">
        <span class="font-bold">New Invoice</span> button and get started
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useInvoiceStore } from "../stores/invoice";
import IconArrowDown from "./icons/IconArrowDown.vue";
import IconEmpty from "./icons/IconEmpty.vue";
import IconPlus from "./icons/IconPlus.vue";
import InvoiceData from "./InvoiceData.vue";

const store = useInvoiceStore();
const arrow = ref();
console.log(store.filterOpen);

const filter = (e) => {
  if (store.filterOpen) {
    e.currentTarget.children[2].style = "transform: rotate(0deg)";
    store.toggleFilter();
  } else {
    e.currentTarget.children[2].style = "transform: rotate(180deg)";
    store.toggleFilter();
  }
};
</script>
